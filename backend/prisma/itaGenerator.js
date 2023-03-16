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

const getZodConstructor = (field, getRelatedModelName = (name) => name.toString()) => {
  let zodType = 'z.unknown()'
  const extraModifiers = ['']
  if (field.kind === 'scalar') {
    switch (field.type) {
      case 'String':
        zodType = 'z.string()'
        break
      case 'Int':
        zodType = 'z.number()'
        extraModifiers.push('int()')
        break
      case 'BigInt':
        zodType = 'z.bigint()'
        break
      case 'DateTime':
        zodType = 'z.date()'
        break
      case 'Float':
        zodType = 'z.number()'
        break
      case 'Decimal':
        zodType = 'z.number()'
        break
      case 'Json':
        zodType = `jsonSchema`
        break
      case 'Boolean':
        zodType = 'z.boolean()'
        break
      default:
    }
  } else if (field.kind === 'enum') {
    zodType = `z.nativeEnum(${field.type})`
  } else if (field.kind === 'object') {
    zodType = getRelatedModelName(field.type)
  }

  if (field.isList) extraModifiers.push('array()')
  if (!field.isRequired && field.type !== 'Json') extraModifiers.push('nullish()')
  if (field.hasDefaultValue && !field.isId) extraModifiers.push('optional()')

  return `${zodType}${extraModifiers.join('.')}`
}

const getRelatedModelImports = (model, models) => {
  const relatedModels = new Set()
  model.fields.forEach((field) => {
    if (field.kind === 'object') {
      relatedModels.add(field.type)
    }
  })

  let imports = ''
  relatedModels.forEach((relatedModelName) => {
    const schemaName = `${relatedModelName}Schema`
    imports += `const ${schemaName} = require('./${schemaName}')\n`
  })

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
    const outputDir = options.generator.output.value
    const { models } = options.dmmf.datamodel
    models.forEach((m) => {
      const zodSchemaName = `${m.name}Schema`
      let output = ''
      output += `const { z } = require('zod')\n`
      output += getRelatedModelImports(m, models)
      output += writeTypeSpecificSchemas(m)
      output += `const ${zodSchemaName} = z.object({\n`
      m.fields.forEach((f) => {
        output += `  ${f.name}: ${getZodConstructor(f, (name) => `${name}Schema`)},\n`
      } )
      output += `})\n\n`
      output += `module.exports = ${zodSchemaName}\n`

      const outputPath = `${outputDir}/${zodSchemaName}.js`
      fs.writeFileSync(outputPath, output)
    })
  },
})

