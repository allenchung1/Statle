/*
  Warnings:

  - Added the required column `fact` to the `State` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnerCount` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "State" ADD COLUMN     "fact" TEXT NOT NULL,
ADD COLUMN     "winnerCount" INTEGER NOT NULL;
