CREATE TABLE `contacts` (
	`iD` INT UNSIGNED NOT NULL AUTO_INCREMENT, -- primary key
	`firstname` TEXT DEFAULT NOT NULL,
    `lastname` TEXT DEFAULT NOT NULL,
    `email` TEXT DEFAULT NOT NULL,
    `phone_number` VARCHAR(32) DEFAULT NOT NULL, -- max phone number is 15 digits but we allow extra characters like spaces, hyphens or plus symbol
    `course` TEXT DEFAULT NOT NULL,
    `question` TEXT DEFAULT NOT NULL,
    PRIMARY KEY (`iD`)
);