// (!) This file needs to be require before calling `expressJSDocSwagger`
// (!) This file needs to be the first one to require schemas (require this file before requiring routes, for example)

const { z } = require('zod')
const { extendZodWithOpenApi, OpenAPIGenerator } = require('@asteasolutions/zod-to-openapi')
const { writeFileSync } = require('fs')
const registry = require('./openApiRegistry')

// Extends Zod with OpenAPI so `Schema.openapi()` is available for schemas to use
extendZodWithOpenApi(z)

// Autoregistration of schemas
require('../schemas/index')

// Register definitions here
// TODO probar con distintas versiones de swaggerfile si express-jsdoc-swagger no acepta la 3.0.0
const generator = new OpenAPIGenerator(registry.definitions, '3.0.0')

// TODO probar opción `generateDocument` en vez de `generateComponents` si express-jsdoc-swagger necesita el documento entero en vez de solo el snippet de declaraciones
const components = generator.generateComponents()

// TODO Test out
writeFileSync('zodOpenAPI.json', JSON.stringify(components))
