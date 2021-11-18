/*
  Warnings:

  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_name` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "type" DROP CONSTRAINT "type_type_name_id_fkey";

-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "ads_type_id" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "type";

-- DropTable
DROP TABLE "type_name";

-- CreateTable
CREATE TABLE "ads_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ads" ADD FOREIGN KEY ("ads_type_id") REFERENCES "ads_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
