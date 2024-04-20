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

INSERT INTO Degree (value)
VALUES
('BEng'),
('BSc'),
('MEng'),
('MSC')
;

-- population from www.canterbury.ac.uk/about-us/faculties-schools-and-departments/faculty-of-science-engineering-and-social-sciences/school-of-engineering-technology-and-design
INSERT INTO Course (fullName, degree, isUndergrad, hasFoundation, description)
VALUES ('Course name',(SELECT value FROM degree WHERE iD = 2), TRUE, FALSE, 'desc');

SELECT * FROM Degree;
SELECT * FROM Course;