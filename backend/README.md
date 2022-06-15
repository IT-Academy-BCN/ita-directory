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

Test