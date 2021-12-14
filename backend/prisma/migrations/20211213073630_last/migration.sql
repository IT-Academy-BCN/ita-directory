-- DropForeignKey
ALTER TABLE "acces_log" DROP CONSTRAINT "acces_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_user_id_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_user_id_fkey";

-- DropForeignKey
ALTER TABLE "media_meta" DROP CONSTRAINT "media_meta_media_id_fkey";

-- DropForeignKey
ALTER TABLE "media_meta" DROP CONSTRAINT "media_meta_media_type_id_fkey";

-- DropForeignKey
ALTER TABLE "recover_password" DROP CONSTRAINT "recover_password_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_user_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_user_status_id_fkey";

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_status_id_fkey" FOREIGN KEY ("user_status_id") REFERENCES "user_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acces_log" ADD CONSTRAINT "acces_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recover_password" ADD CONSTRAINT "recover_password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_meta" ADD CONSTRAINT "media_meta_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_meta" ADD CONSTRAINT "media_meta_media_type_id_fkey" FOREIGN KEY ("media_type_id") REFERENCES "media_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "user.email_unique" RENAME TO "user_email_key";
