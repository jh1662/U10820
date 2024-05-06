CREATE TABLE `Degree` ( -- saperate table due to normalisation
  `iD` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(8) NOT NULL, -- Like MSci - degree abbreviations
  PRIMARY KEY (`iD`)
);
-- won't work without index
CREATE INDEX degreeIdx ON Degree(value);

CREATE TABLE `Course` (
	`iD` INT UNSIGNED NOT NULL AUTO_INCREMENT, -- primary key
	`fullName` VARCHAR(255) NOT NULL,
	`degree` VARCHAR(8) NOT NULL, -- foreign key
	`isUndergrad` BOOLEAN NOT NULL,
	`hasFoundation` BOOLEAN NOT NULL,
	`description` TEXT DEFAULT NULL,
	PRIMARY KEY (`iD`),
  CONSTRAINT degreeFK FOREIGN KEY (degree) REFERENCES Degree(value)
);