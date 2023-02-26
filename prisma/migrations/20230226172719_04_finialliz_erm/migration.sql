/*
  Warnings:

  - You are about to drop the column `hausnummer` on the `Adresse` table. All the data in the column will be lost.
  - You are about to drop the column `ort` on the `Adresse` table. All the data in the column will be lost.
  - You are about to drop the column `plz` on the `Adresse` table. All the data in the column will be lost.
  - You are about to drop the column `strasse` on the `Adresse` table. All the data in the column will be lost.
  - You are about to drop the column `zusatz` on the `Adresse` table. All the data in the column will be lost.
  - You are about to drop the column `telefonnummer` on the `Kunde` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Kunde` table. All the data in the column will be lost.
  - You are about to drop the column `anforderungen` on the `Mietung` table. All the data in the column will be lost.
  - You are about to drop the column `betriebssysteme` on the `Mietung` table. All the data in the column will be lost.
  - You are about to drop the column `enddatum` on the `Mietung` table. All the data in the column will be lost.
  - You are about to drop the column `mitgebrauchterHardware` on the `Mietung` table. All the data in the column will be lost.
  - You are about to drop the column `startdatum` on the `Mietung` table. All the data in the column will be lost.
  - You are about to drop the `Arbeitsplatz` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetNumber` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Adresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Kunde` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Mietung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specification` to the `Mietung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Mietung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCosts` to the `Mietung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalHours` to the `Mietung` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uuid` to the `Mietung` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Adresse` DROP COLUMN `hausnummer`,
    DROP COLUMN `ort`,
    DROP COLUMN `plz`,
    DROP COLUMN `strasse`,
    DROP COLUMN `zusatz`,
    ADD COLUMN `city` VARCHAR(255) NOT NULL,
    ADD COLUMN `street` VARCHAR(255) NOT NULL,
    ADD COLUMN `streetNumber` INTEGER NOT NULL,
    ADD COLUMN `zipCode` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Kunde` DROP COLUMN `telefonnummer`,
    DROP COLUMN `username`,
    ADD COLUMN `gender` ENUM('HERR', 'FRAU', 'DIVERS') NOT NULL;

-- AlterTable
ALTER TABLE `Mietung` DROP COLUMN `anforderungen`,
    DROP COLUMN `betriebssysteme`,
    DROP COLUMN `enddatum`,
    DROP COLUMN `mitgebrauchterHardware`,
    DROP COLUMN `startdatum`,
    ADD COLUMN `bookingDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `briefing` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `specification` VARCHAR(255) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `totalCosts` DOUBLE NOT NULL,
    ADD COLUMN `totalHours` INTEGER NOT NULL,
    ADD COLUMN `uuid` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `Arbeitsplatz`;

-- CreateTable
CREATE TABLE `Hardware` (
    `hardwareID` INTEGER NOT NULL AUTO_INCREMENT,
    `typ` ENUM('LAPTOP', 'PC', 'BAREBONE', 'BYOD') NOT NULL DEFAULT 'PC',
    `operatingSystem` ENUM('WINDOWS', 'DEBIAN', 'LINUX_MINT', 'UBUNTU') NOT NULL DEFAULT 'WINDOWS',
    `mietID` INTEGER NOT NULL,

    PRIMARY KEY (`hardwareID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hardware` ADD CONSTRAINT `Hardware_mietID_fkey` FOREIGN KEY (`mietID`) REFERENCES `Mietung`(`mietID`) ON DELETE RESTRICT ON UPDATE CASCADE;
