CREATE TABLE `gf_groups` (
	`id` varchar(7) NOT NULL,
	`name` varchar(256) NOT NULL,
	`description` text,
	`active` boolean NOT NULL DEFAULT false,
	`verified_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `gf_groups_id` PRIMARY KEY(`id`)
);
