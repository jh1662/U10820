CREATE TABLE `Course` (
	`iD` INT UNSIGNED NOT NULL AUTO_INCREMENT, -- primary key
	`fullName` VARCHAR(255) NOT NULL,
	`degree` INT UNSIGNED NOT NULL, -- foreign key
	`isUndergrad` BOOLEAN NOT NULL,
	`hasFoundation` BOOLEAN NOT NULL,
	`description` TEXT DEFAULT NULL,
	PRIMARY KEY (`iD`)
);

CREATE TABLE `degree` ( -- saperate table due to normalisation
  `iD` INT unsigned NOT NULL AUTO_INCREMENT,
  `value` VARCHAR(8) NOT NULL, -- Like MSci - degree abbreviations
  PRIMARY KEY (`iD`)
);

-- population from https://www.canterbury.ac.uk/about-us/faculties-schools-and-departments/faculty-of-science-engineering-and-social-sciences/school-of-engineering-technology-and-design
INSERT INTO Course (fullName, degree, isUndergrad, hasFoundation, description) 
VALUES ('Course name',2, TRUE, FALSE, 'desc');

SELECT * FROM Course;

