/*
  Warnings:

  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Notes`;

-- CreateTable
CREATE TABLE `Kunde` (
    `kundenID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `vorname` VARCHAR(255) NOT NULL,
    `telefonnummer` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`kundenID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adresse` (
    `adresseID` INTEGER NOT NULL AUTO_INCREMENT,
    `strasse` VARCHAR(255) NOT NULL,
    `hausnummer` INTEGER NOT NULL,
    `plz` INTEGER NOT NULL,
    `ort` VARCHAR(255) NOT NULL,
    `zusatz` VARCHAR(255) NOT NULL,
    `kundenID` INTEGER NOT NULL,

    UNIQUE INDEX `Adresse_kundenID_key`(`kundenID`),
    PRIMARY KEY (`adresseID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mietung` (
    `mietID` INTEGER NOT NULL AUTO_INCREMENT,
    `startdatum` DATETIME(3) NOT NULL,
    `enddatum` DATETIME(3) NOT NULL,
    `mitgebrauchterHardware` BOOLEAN NOT NULL,
    `anforderungen` VARCHAR(255) NOT NULL,
    `software` VARCHAR(255) NOT NULL,
    `betriebssysteme` ENUM('WINDOWS', 'LINUX') NOT NULL DEFAULT 'WINDOWS',
    `kundenID` INTEGER NOT NULL,

    PRIMARY KEY (`mietID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arbeitsplatz` (
    `platzID` INTEGER NOT NULL AUTO_INCREMENT,
    `tischnummer` INTEGER NOT NULL,

    PRIMARY KEY (`platzID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Adresse` ADD CONSTRAINT `Adresse_kundenID_fkey` FOREIGN KEY (`kundenID`) REFERENCES `Kunde`(`kundenID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mietung` ADD CONSTRAINT `Mietung_kundenID_fkey` FOREIGN KEY (`kundenID`) REFERENCES `Kunde`(`kundenID`) ON DELETE RESTRICT ON UPDATE CASCADE;
