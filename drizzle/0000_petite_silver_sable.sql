CREATE TABLE `news` (
	`id` int NOT NULL,
	`title` varchar(255),
	`link` varchar(255),
	`time` timestamp DEFAULT (now()),
	CONSTRAINT `news_id` PRIMARY KEY(`id`)
);
