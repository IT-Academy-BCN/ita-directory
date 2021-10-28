/*
  Warnings:

  - Changed the type of `thumnail` on the `media_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `medium` on the `media_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `large` on the `media_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `original` on the `media_type` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "media_type" DROP COLUMN "thumnail",
ADD COLUMN     "thumnail" BOOLEAN NOT NULL,
DROP COLUMN "medium",
ADD COLUMN     "medium" BOOLEAN NOT NULL,
DROP COLUMN "large",
ADD COLUMN     "large" BOOLEAN NOT NULL,
DROP COLUMN "original",
ADD COLUMN     "original" BOOLEAN NOT NULL;
