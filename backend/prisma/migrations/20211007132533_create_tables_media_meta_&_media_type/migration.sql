-- CreateTable
CREATE TABLE "media_meta" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "file_size" TEXT NOT NULL,
    "media_id" INTEGER NOT NULL,
    "media_type_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "thumnail" INTEGER NOT NULL,
    "medium" INTEGER NOT NULL,
    "large" INTEGER NOT NULL,
    "original" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "media_meta" ADD FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_meta" ADD FOREIGN KEY ("media_type_id") REFERENCES "media_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
