CREATE TABLE `gf_group_locations` (
	`int` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`address_line_1` varchar(255) NOT NULL,
	`address_line_2` varchar(255),
	`town` varchar(255) NOT NULL,
	`county` varchar(255),
	`post_code` varchar(8) NOT NULL,
	`place_id` varchar(255),
	`description` varchar(255),
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_locations_int` PRIMARY KEY(`int`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_schedules` (
	`int` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`weekday` enum('Mon','Tue','Wed','Thu','Fri','Sat','Sun') NOT NULL,
	`start-time` time NOT NULL,
	`end-time` time NOT NULL,
	`description` varchar(255),
	`active` boolean NOT NULL DEFAULT true,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_schedules_int` PRIMARY KEY(`int`)
);
--> statement-breakpoint
CREATE TABLE `gf_groups` (
	`id` varchar(7) NOT NULL,
	`name` varchar(256) NOT NULL,
	`description` text,
	`active` boolean NOT NULL DEFAULT false,
	`verified_at` datetime,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_groups_id` PRIMARY KEY(`id`)
);
