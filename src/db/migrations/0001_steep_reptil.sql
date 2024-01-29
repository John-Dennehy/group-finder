ALTER TABLE `gf_groups` MODIFY COLUMN `verified_at` datetime;--> statement-breakpoint
ALTER TABLE `gf_groups` MODIFY COLUMN `created_at` datetime DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `gf_groups` MODIFY COLUMN `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;