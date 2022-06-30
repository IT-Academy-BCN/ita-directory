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
      url: `http://localhost:${process.env.PORT}`,
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
  // components: {
  //   securitySchemes: {
  //     bearerAuth: {
  //       type: 'http',
  //       scheme: 'bearer',
  //       bearerFormat: 'JWT',
  //     },
  //   },
  // },
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],

  // consumes: [
  //   "application/json"
  // ],
  // produces: [
  //   "application/json"
  // ],
  // paths : {
  //   "/users/v1/login": {
  //     post: {
  //       tags: ["userflow"],
  //       summary: "Login users",
  //       requestBody: {
  //         description: "Recieves email + password to login the user.",
  //         required: true,
  //         content: {
  //           "application/json": {
  //             schema: {
  //               $ref: "#/definitions/userLogin"
  //             }
  //           }
  //         }
  //       },
  //       responses: {
  //         "200": {
  //           "description": "Login succesful"
  //         },
  //         "400": {
  //           "description": "Not found"
  //         },
  //         "500": {
  //           "description": "Server error"
  //         }
  //       }
  //     }
  //   }
  // },
  // "definitions": {
  //   "userLogin": {
  //     "properties": {
  //       "email": {
  //         "type": "string",
  //         "example": "myemail@gmail.com"
  //       },
  //       "password": {
  //         "type": "string",
  //         "example": "********"
  //       }
  //     }
  //   }
  // }
}

module.exports = options
