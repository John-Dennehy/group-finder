CREATE TABLE `gf_group_contact_details` (
	`int` int AUTO_INCREMENT NOT NULL,
	`group_id` varchar(7) NOT NULL,
	`contact_type` enum('email','phone','website','facebook','twitter','instagram') NOT NULL,
	`contact` varchar(255) NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gf_group_contact_details_int` PRIMARY KEY(`int`)
);
