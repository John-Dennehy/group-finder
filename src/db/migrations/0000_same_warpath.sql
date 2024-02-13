CREATE TABLE `gf_attendee_types` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255),
	`active` boolean NOT NULL DEFAULT true,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_attendee_types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_attendee_types` (
	`group_id` varchar(7) NOT NULL,
	`attendee_type_id` varchar(255) NOT NULL,
	`filter_type` enum('include','exclude') NOT NULL DEFAULT 'include',
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_attendee_types_group_id_attendee_type_id_pk` PRIMARY KEY(`group_id`,`attendee_type_id`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_contact_details` (
	`id` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`contact_type` enum('email','phone','website','facebook','twitter','instagram') NOT NULL,
	`contact` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_contact_details_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_locations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`address_line_1` varchar(255) NOT NULL,
	`address_line_2` varchar(255),
	`town` varchar(255) NOT NULL,
	`county` varchar(255),
	`post_code` varchar(8) NOT NULL,
	`place_id` varchar(255),
	`description` varchar(255),
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_locations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_schedules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`weekday` enum('Mon','Tue','Wed','Thu','Fri','Sat','Sun') NOT NULL,
	`start-time` time NOT NULL,
	`end-time` time NOT NULL,
	`description` varchar(255),
	`active` boolean NOT NULL DEFAULT true,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_schedules_id` PRIMARY KEY(`id`)
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
