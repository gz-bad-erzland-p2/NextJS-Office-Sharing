/*
  Warnings:

  - The values [HERR,FRAU,DIVERS] on the enum `Customer_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Customer` MODIFY `gender` ENUM('Herr', 'Frau', 'Divers') NOT NULL;
