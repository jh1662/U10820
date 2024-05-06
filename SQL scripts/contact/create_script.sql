CREATE TABLE `Course` (
	`iD` INT UNSIGNED NOT NULL AUTO_INCREMENT, -- primary key
	`firstname` TEXT DEFAULT NULL,
    `lastname` TEXT DEFAULT NULL,
    `email` TEXT DEFAULT NULL,
    `phone_number` VARCHAR(32) DEFAULT NULL,
    `course` TEXT DEFAULT NULL,
    `question` TEXT DEFAULT NULL,
);