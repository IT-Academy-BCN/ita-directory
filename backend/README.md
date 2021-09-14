# ITA PROJECT DIRECTORY BACKEND
## Prisma usage
Generate prisma client:<br>
`npx prisma generate`

Add the given lines of code to your db index.js, so that you can instantiate the Prisma client:<br>
`const { PrismaClient } = require('@prisma/client');`<br>
`const prisma = new PrismaClient();`

Synchronize your schema with the database:<br>
`npx prisma migrate dev --name init`<br>

Database will be created with the values in your .env. Here the name of the db would be "db_name":<br>
`DATABASE_URL = mysql://user:password@localhost:3306/db_name`

