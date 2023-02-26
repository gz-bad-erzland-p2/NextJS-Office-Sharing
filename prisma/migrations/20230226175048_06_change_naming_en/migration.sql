/*
  Warnings:

  - You are about to drop the column `mietID` on the `Hardware` table. All the data in the column will be lost.
  - You are about to drop the `Adresse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kunde` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mietung` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bookingID` to the `Hardware` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Adresse` DROP FOREIGN KEY `Adresse_kundenID_fkey`;

-- DropForeignKey
ALTER TABLE `Hardware` DROP FOREIGN KEY `Hardware_mietID_fkey`;

-- DropForeignKey
ALTER TABLE `Mietung` DROP FOREIGN KEY `Mietung_kundenID_fkey`;

-- AlterTable
ALTER TABLE `Hardware` DROP COLUMN `mietID`,
    ADD COLUMN `bookingID` INTEGER NOT NULL,
    MODIFY `operatingSystem` ENUM('WINDOWS', 'DEBIAN', 'UBUNTU', 'LINUX_MINT') NOT NULL DEFAULT 'WINDOWS';

-- DropTable
DROP TABLE `Adresse`;

-- DropTable
DROP TABLE `Kunde`;

-- DropTable
DROP TABLE `Mietung`;

-- CreateTable
CREATE TABLE `Customer` (
    `customerID` INTEGER NOT NULL AUTO_INCREMENT,
    `gender` ENUM('HERR', 'FRAU', 'DIVERS') NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `surname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`customerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `adressID` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NOT NULL,
    `streetNumber` INTEGER NOT NULL,
    `zipCode` INTEGER NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `customerID` INTEGER NOT NULL,

    UNIQUE INDEX `Address_customerID_key`(`customerID`),
    PRIMARY KEY (`adressID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `bookingID` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(255) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `briefing` BOOLEAN NOT NULL DEFAULT false,
    `specification` VARCHAR(255) NOT NULL,
    `bookingDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalHours` INTEGER NOT NULL,
    `totalCosts` DOUBLE NOT NULL,
    `software` VARCHAR(255) NOT NULL,
    `customerID` INTEGER NOT NULL,

    PRIMARY KEY (`bookingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customer`(`customerID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_customerID_fkey` FOREIGN KEY (`customerID`) REFERENCES `Customer`(`customerID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hardware` ADD CONSTRAINT `Hardware_bookingID_fkey` FOREIGN KEY (`bookingID`) REFERENCES `Booking`(`bookingID`) ON DELETE RESTRICT ON UPDATE CASCADE;
