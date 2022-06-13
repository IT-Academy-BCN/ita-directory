/*
  Warnings:

  - Added the required column `city` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "included_expenses" BOOLEAN NOT NULL DEFAULT false;
