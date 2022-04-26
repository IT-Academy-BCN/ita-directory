/*
  Warnings:

  - You are about to drop the column `city` on the `ads` table. All the data in the column will be lost.
  - Added the required column `location` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "city",
ADD COLUMN     "location" INTEGER NOT NULL;
