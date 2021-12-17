/*
  Warnings:

  - You are about to drop the column `date` on the `Occurrence` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Occurrence` DROP COLUMN `date`,
    ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
