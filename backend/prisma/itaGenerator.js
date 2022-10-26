/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const generatorHelper = require('@prisma/generator-helper')
const fs = require('fs').promises

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
  // if (field.documentation) {
  //   zodType = computeCustomSchema(field.documentation) ?? zodType
  //   extraModifiers.push(...computeModifiers(field.documentation))
  // }
  if (!field.isRequired && field.type !== 'Json') extraModifiers.push('nullish()')
  if (field.hasDefaultValue && !field.isId) extraModifiers.push('optional()')

  return `${zodType}${extraModifiers.join('.')}`
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
    models.forEach(async (m) => {
      const zodSchemaName = `${m.name}Schema`
      let output = ''
      output += `const { z } = require('zod')\n`
      output += writeTypeSpecificSchemas(m)
      output += `const ${zodSchemaName} = z.object({\n`
      m.fields.forEach((f) => {
        if (f.kind === 'scalar') {
          output += `  ${f.name}: ${getZodConstructor(f)},\n`
        }
      })
      output += `})\n\n`
      output += `module.exports = ${zodSchemaName}\n`
      // Check if schema is already created and if it has been changed
      await fs.access(`${outputDir}/${zodSchemaName}.js`).then(async () => {
        const data = await fs.readFile(`${outputDir}/${zodSchemaName}.js`, { encoding: 'utf-8' })
        if (data.replace(/\s/g, '') != output.replace(/\s/g, '')) {
          await fs.writeFile(`${outputDir}/${zodSchemaName}.js`, output).then((err) => {
            if (err) {
              console.error(err)
            }
            // file written successfully
            console.log(`Generated ${zodSchemaName}.js`)
          })
        } else {
          console.log(`Already exist ${zodSchemaName}.js`)
        }
      })
    })
  },
})

// Example of generated files content:

// const { z } = require('zod')

// const UserRoleSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   admin: z.boolean(),
//   developer: z.boolean(),
//   manager: z.boolean(),
//   registered: z.boolean(),
// })

// module.exports =  UserRoleSchema
