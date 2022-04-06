/*
  Warnings:

  - You are about to drop the `recover_password` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recover_password" DROP CONSTRAINT "recover_password_user_id_fkey";

-- DropTable
DROP TABLE "recover_password";

-- CreateTable
CREATE TABLE "recover_password_log" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "recover_password_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recover_password_log" ADD CONSTRAINT "recover_password_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
