/*
  Warnings:

  - The values [LAPTOP,BAREBONE] on the enum `Hardware_typ` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Hardware` MODIFY `typ` ENUM('Laptop', 'PC', 'Barebone', 'BYOD') NOT NULL DEFAULT 'PC';
