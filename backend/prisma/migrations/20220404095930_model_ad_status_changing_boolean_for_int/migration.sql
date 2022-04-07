/*
  Warnings:

  - Changed the type of `publish` on the `ad_status` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `un_publish` on the `ad_status` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
CREATE SEQUENCE "ad_status_id_seq";
ALTER TABLE "ad_status" ALTER COLUMN "id" SET DEFAULT nextval('ad_status_id_seq'),
DROP COLUMN "publish",
ADD COLUMN     "publish" INTEGER NOT NULL,
DROP COLUMN "un_publish",
ADD COLUMN     "un_publish" INTEGER NOT NULL;
ALTER SEQUENCE "ad_status_id_seq" OWNED BY "ad_status"."id";
