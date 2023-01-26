/*
  Warnings:

  - The values [LINUX] on the enum `Mietung_betriebssysteme` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Mietung` MODIFY `betriebssysteme` ENUM('WINDOWS', 'DEBIAN', 'LINUX_MINT', 'UBUNTU') NOT NULL DEFAULT 'WINDOWS';
