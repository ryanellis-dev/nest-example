/*
  Warnings:

  - The `age` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age";
ALTER TABLE "User" ADD COLUMN     "age" INT4;
