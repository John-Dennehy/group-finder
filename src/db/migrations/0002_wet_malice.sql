CREATE TABLE `gf_group_schedule` (
	`int` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(6) NOT NULL,
	`weekday` enum('Mon','Tue','Wed','Thu','Fri','Sat','Sun') NOT NULL,
	`start-time` time NOT NULL,
	`end-time` time NOT NULL,
	`description` varchar(255),
	`active` boolean NOT NULL DEFAULT true,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_schedule_int` PRIMARY KEY(`int`)
);
