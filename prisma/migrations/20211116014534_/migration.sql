/*
  Warnings:

  - You are about to drop the `Occurrences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Occurrences`;

-- CreateTable
CREATE TABLE `Occurrence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(10, 8) NOT NULL,
    `longitude` DECIMAL(11, 8) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
