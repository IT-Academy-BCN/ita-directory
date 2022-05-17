/*
  Warnings:

  - You are about to drop the column `name` on the `ad_status` table. All the data in the column will be lost.
  - You are about to drop the column `un_publish` on the `ad_status` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ad_status" DROP COLUMN "name",
DROP COLUMN "un_publish",
ALTER COLUMN "publish" DROP NOT NULL;
