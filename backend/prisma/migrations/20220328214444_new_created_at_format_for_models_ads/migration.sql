/*
  Warnings:

  - Made the column `createdAt` on table `ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updateAt` on table `ads` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "updateAt" SET NOT NULL,
ALTER COLUMN "updateAt" SET DATA TYPE TIMESTAMP(3);
