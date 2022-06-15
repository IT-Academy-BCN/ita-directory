/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const generatorHelper = require('@prisma/generator-helper')
// const { z } = require('zod')
const fs = require('fs')

// function fieldToZod(f) {
//   let zodType = 'z.unknown()'
//   const extraModifiers = ['']
//   switch (f.type) {
//     case 'String':
//       zodType = 'z.string()'
//       break
//     case 'Number':
//       zodType = 'z.number()'
//       break
//     case 'Int':
//       zodType = 'z.number().int()'
//       break
//     case 'Boolean':
//       zodType = 'z.boolean()'
//       break
//     case 'Datetime':
//       zodType = 'z.date()'
//       break
//     case '':
//       zodType = 'z.date()'
//       break
//     default:
//       break
//   }
//   if (!f.isRequired) {
//     extraModifiers.push('nullish()')
//   }
//   return `${f.name}: ${zodType}${extraModifiers.join('.')}`
// }

// const writeTypeSpecificSchemas = (model, sourceFile, config, _prismaOptions) => {
//   if (model.fields.some((f) => f.type === 'Json')) {
//     sourceFile.addStatements((writer) => {
//       writer.newLine()
//       writeArray(writer, [
//         '// Helper schema for JSON fields',
//         `type Literal = boolean | number | string${config.prismaJsonNullability ? '' : '| null'}`,
//         'type Json = Literal | { [key: string]: Json } | Json[]',
//         `const literalSchema = z.union([z.string(), z.number(), z.boolean()${
//           config.prismaJsonNullability ? '' : ', z.null()'
//         }])`,
//         'const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))',
//       ])
//     })
//   }

//   if (config.useDecimalJs && model.fields.some((f) => f.type === 'Decimal')) {
//     sourceFile.addStatements((writer) => {
//       writer.newLine()
//       writeArray(writer, [
//         '// Helper schema for Decimal fields',
//         'z',
//         '.instanceof(Decimal)',
//         '.or(z.string())',
//         '.or(z.number())',
//         '.refine((value) => {',
//         '  try {',
//         '    return new Decimal(value);',
//         '  } catch (error) {',
//         '    return false;',
//         '  }',
//         '})',
//         '.transform((value) => new Decimal(value));',
//       ])
//     })
//   }
// }

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
        zodType = 'jsonSchema'
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
  if (field.hasDefaultValue) extraModifiers.push('optional()')

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
    models.forEach((m) => {
      const zodSchemaName = `${m.name}Schema`
      let output = ''
      output += `const { z } = require('zod')\n`
      output += '\n'
      output += `const ${zodSchemaName} = z.object({\n`
      m.fields.forEach((f) => {
        if (f.kind === 'scalar') {
          // output += `  ${fieldToZod(f)},\n`
          output += `  ${f.name}: ${getZodConstructor(f)},\n`
        }
      })
      output += `})\n\n`
      output += `export default ${zodSchemaName}`

      // console.log('OUTPUT:', `${outputDir}/${zodSchemaName}.js`)

      fs.writeFile(`${outputDir}/${zodSchemaName}.js`, output, (err) => {
        if (err) {
          console.error(err)
        }
        // file written successfully
        console.log(`Generated ${zodSchemaName}.js`)
      })
    })
  },
})

// const { z } = require('zod')

// const UserRoleSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   admin: z.boolean(),
//   developer: z.boolean(),
//   manager: z.boolean(),
//   registered: z.boolean(),
// })

// export default UserRoleSchema
