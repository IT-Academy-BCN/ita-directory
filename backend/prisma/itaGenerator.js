// eslint-disable-next-line import/no-extraneous-dependencies
const generatorHelper = require('@prisma/generator-helper')
const { z } = require('zod')

function fieldToZod(f) {
  let zodType = 'z.unknown()'
  const extraModifiers = ['']
  switch (f.type) {
    case 'String':
      zodType = z.string()
      break
    default:
      break
  }
  if (!f.isRequired) {
    extraModifiers.push('nullish()')
  }
  return `${f.name}: ${zodType}${extraModifiers.join('.')}`
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
      output += `const {z} = require('zod')\n`
      output += '\n'
      output += `const ${zodSchemaName} = z.object({\n`
      m.fields.forEach((f) => {
        if (f.kind === 'scalar') {
          output += `  ${fieldToZod(f)},\n`
        }
      })
      output += `})\n`

      console.log('output', output)
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
