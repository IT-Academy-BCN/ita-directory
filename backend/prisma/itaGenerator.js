/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const generatorHelper = require('@prisma/generator-helper')
const fs = require('fs')

const writeTypeSpecificSchemas = (model) => {
  let out = ''
  if (model.fields.some((f) => f.type === 'Json')) {
    out += '// Helper schema for Json fields\n'
    out += `const literalSchema = z.union([z.object().partial(), z.null(), z.undefined()])\n`
    out += `const jsonSchema = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))\n\n`
  }
  return `\n${out}`
}

const getZodConstructor = (field, modelName, getRelatedModelName = (name) => name.toString()) => {
  let zodType = 'z.unknown()';
  const extraModifiers = [''];

  if (field.kind === 'scalar') {
    switch (field.type) {
      case 'String':
        zodType = 'z.string()';
        break;
      case 'Int':
        zodType = 'z.number()';
        extraModifiers.push('int()');
        break;
      case 'BigInt':
        zodType = 'z.bigint()';
        break;
      case 'DateTime':
        zodType = 'z.date()';
        break;
      case 'Float':
        zodType = 'z.number()';
        break;
      case 'Decimal':
        zodType = 'z.number()';
        break;
      case 'Json':
        zodType = `jsonSchema`;
        break;
      case 'Boolean':
        zodType = 'z.boolean()';
        break;
      default:
    }
  } else if (field.kind === 'enum') {
    zodType = `z.nativeEnum(${field.type})`;
} else if (field.kind === 'object') {
    if (field.type === modelName) {
      zodType = `z.lazy(() => ${modelName}Schema)`;
    } else {
      zodType = getRelatedModelName(field.type);
    }
    if (!field.isRequired) extraModifiers.push('optional()');
  }

  if (field.isList) extraModifiers.push('array()');
  if (!field.isRequired && field.type !== 'Json' && field.kind !== 'object') extraModifiers.push('nullish()');
  if (field.hasDefaultValue && !field.isId) extraModifiers.push('optional()');

  return `${zodType}${extraModifiers.join('.')}`;
}

const getRelatedModelImports = (model, models, enums) => {
  const relatedModels = new Set()
  const relatedEnums = new Set()
  model.fields.forEach((field) => {
    if (field.kind === 'object' && field.type !== model.name) {
      relatedModels.add(field.type)
    } else if (field.kind === 'enum') {
      relatedEnums.add(field.type)
    }
  })

  let imports = ''
  relatedModels.forEach((relatedModelName) => {
    const schemaName = `${relatedModelName}Schema`
    imports += `const ${schemaName} = require('./${schemaName}')\n`
  })

  if (relatedEnums.size > 0) {
    imports += `const { `;
    relatedEnums.forEach((relatedEnumName, index) => {
      imports += `${relatedEnumName}${index < relatedEnums.size - 1 ? ', ' : ''}`;
    });
    imports += ` } = require('@prisma/client')\n`;
  }

  return imports
}


generatorHelper.generatorHandler({
  onManifest() {
    return {
      prettyName: 'ITA Generator for zod schemas',
      defaultOutput: '../app/schemas',
    }
  },

  onGenerate(options) {
    const outputDir = options.generator.output.value;
    const { models, enums } = options.dmmf.datamodel;
    models.forEach((m) => {
      const zodSchemaName = `${m.name}Schema`;
      let output = '';
      output += `const { z } = require('zod')\n`;
      output += getRelatedModelImports(m, models, enums);
      output += writeTypeSpecificSchemas(m);
      output += `const ${zodSchemaName} = z.object({\n`;
      m.fields.forEach((f) => {
        output += `  ${f.name}: ${getZodConstructor(f, m.name, (name) => `${name}Schema`)},\n`;
      });
      output += `})\n\n`;
      output += `module.exports = ${zodSchemaName}\n`;

      const outputPath = `${outputDir}/${zodSchemaName}.js`;
      fs.writeFileSync(outputPath, output);
    });
  },
})
