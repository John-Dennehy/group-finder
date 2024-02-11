CREATE TABLE `gf_attendee_types` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255),
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_attendee_types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gf_group_attendee_types` (
	`group_id` varchar(7) NOT NULL,
	`attendee_type_id` varchar(255) NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_attendee_types_group_id_attendee_type_id_pk` PRIMARY KEY(`group_id`,`attendee_type_id`)
);
