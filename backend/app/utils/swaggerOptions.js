const options = {
  openapi: '3.0.6',
  info: {
    version: '1.0.0',
    title: 'API ITACADEMY DIRECTORY',
    description: 'API endpoints and specifications',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  baseDir: __dirname,
  filesPattern: '../routes/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: '/v3/api-docs',
  tags: [
    {
      name: 'API ITACADEMY DIRECTORY',
      description: 'Rutas para IT ACADEMY.',
    },
  ],
  servers: [
    {
      url: `http://localhost:${process.env.PORT}${process.env.PREFIX}`,
      description: 'Development server',
    },
  ],
  security: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
}

module.exports = options
