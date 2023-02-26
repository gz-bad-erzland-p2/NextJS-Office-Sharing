/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `adressID` on the `Address` table. All the data in the column will be lost.
  - Added the required column `addressID` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Address` DROP PRIMARY KEY,
    DROP COLUMN `adressID`,
    ADD COLUMN `addressID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`addressID`);
