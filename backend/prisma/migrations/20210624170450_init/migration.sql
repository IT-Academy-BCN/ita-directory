-- AlterTable
ALTER TABLE "user_role" ALTER COLUMN "admin" SET DEFAULT false,
ALTER COLUMN "manager" SET DEFAULT false,
ALTER COLUMN "registered" SET DEFAULT false;

-- AlterTable
ALTER TABLE "user_status" ALTER COLUMN "active" SET DEFAULT false,
ALTER COLUMN "pending" SET DEFAULT false,
ALTER COLUMN "suspended" SET DEFAULT false,
ALTER COLUMN "deleted" SET DEFAULT false;
