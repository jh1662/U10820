CREATE TABLE `contacts` (
	`iD` INT UNSIGNED NOT NULL AUTO_INCREMENT, -- primary key
	`firstname` TEXT NOT NULL,
    `lastname` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `phone_number` VARCHAR(32) NOT NULL, -- max phone number is 15 digits but we allow extra characters like spaces, hyphens or plus symbol
    `course` TEXT NOT NULL,
    `question` TEXT NOT NULL,
    PRIMARY KEY (`iD`)
);