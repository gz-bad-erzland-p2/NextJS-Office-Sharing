/*
  Warnings:

  - You are about to drop the column `vorname` on the `Kunde` table. All the data in the column will be lost.
  - Added the required column `surname` to the `Kunde` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Kunde` DROP COLUMN `vorname`,
    ADD COLUMN `surname` VARCHAR(255) NOT NULL;
