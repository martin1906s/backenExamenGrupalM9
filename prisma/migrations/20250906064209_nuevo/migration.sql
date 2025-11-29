-- DropIndex
DROP INDEX `TokenRevocado_token_key` ON `TokenRevocado`;

-- AlterTable
ALTER TABLE `TokenRevocado` MODIFY `token` VARCHAR(255) NOT NULL;
