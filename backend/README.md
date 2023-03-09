# ITA PROJECT DIRECTORY BACKEND

## Prisma usage

Generate prisma client:
`npx prisma generate`

Add the given lines of code to your db index.js, so that you can instantiate the Prisma client:
`const { PrismaClient } = require('@prisma/client');`
`const prisma = new PrismaClient();`

Synchronize your schema with the database:
`npx prisma migrate dev --name init`

Database will be created with the values in your .env. Here the name of the db would be "db\_name":
`DATABASE_URL = mysql://user:password@localhost:3306/db_name`

## Zod-to-OpenAPI

A bit of explanation here because it can be confusing. The project was configured to generate swagger documentation from the jsdocs, which are just special comments before each route to define them.

The problem lies in the fact that, to use an object as a request param or response, there was the need to define it in the same comment format, but we use Zod to validate the request, resulting in the situation that the data schema definitions were duplicated: they were declared once in the Zod files and then again as jsdoc objects, breaking the single source of truth pattern that tries to achieve the "docs from code" paradigm of the jsdocs.


### Key points

This is a live section that will be updated following developments in this area.

- Schemas now autoregister as parameters to `zod-to-openapi` registry in their own file.
- `express-jsdoc-swagger` has an integration option with old swaggerfiles. In order to make it work, 
- `'./utils/generateZodSwaggerFile'` needs to be required before any schema file and before `expressJSDocSwagger` is used. 
- Schemas need to be required at `/backend/schemas/index.js` in order to be discoverable and used to generate the swaggerfile.


So, in order to create a new schema:
1. Follow the creation pattern from other schemas.
2. Require it at `/backend/schemas/index.js` so the generator can find it.