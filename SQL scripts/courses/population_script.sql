-- population from www.canterbury.ac.uk/about-us/faculties-schools-and-departments/faculty-of-science-engineering-and-social-sciences/school-of-engineering-technology-and-design:
-- All mentioned degrees from the list
INSERT INTO Degree (value)
VALUES
('BEng'),
('BSc'),
('MEng'),
('MSC')
;

-- All courses:
INSERT INTO Course (fullName, degree, isUndergrad, hasFoundation, description)
VALUES
-- as suggesting from a team-mate, I replaced every course description with the website page link to it instead.
-- didn't use "http" in URLs because some MySQL compilers view any URL as a server connection request
-- undergrad courses:
('Biomedial Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/biomedical-engineering-beng'),
('Biomedial Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/biomedical-engineering-with-foundation-year'),
('Business Information Systems', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/business-information-systems'),
('Business Information Systems', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/business-information-systems-with-foundation-year'),
('Chemical Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/chemical-engineering-beng'),
('Chemical Engineering', (SELECT value FROM Degree WHERE iD=3), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/chemical-engineering-meng'),
('Chemical Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/chemical-engineering-with-foundation-year'),
('Computer Forensics and Security', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/computer-forensics-and-security'),
('Computer Forensics and Security', (SELECT value FROM Degree WHERE iD=2), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/computer-forensics-and-security-with-foundation-year'),
('Computer Science', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/computer-science'),
('Computer Science', (SELECT value FROM Degree WHERE iD=2), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/computer-science-with-foundation-year'),
('Computing', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/computing'),
('Computing', (SELECT value FROM Degree WHERE iD=2), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/computing-with-foundation-year'),
('Data Computing Intelligence', (SELECT value FROM Degree WHERE iD=2), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/data-computing-intelligence'),
('Data Computing Intelligence', (SELECT value FROM Degree WHERE iD=2), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/data-computing-intelligence-with-foundation-year'),
('General Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/general-engineering-beng'),
('General Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/general-engineering-with-foundation-year'),
('Mechanical Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering'),
('Mechanical Engineering (Advance Manufacture)', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering-advanced-manufacture-beng'),
('Mechanical Engineering (Advance Manufacture)', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering-advanced-manufacture-with-foundation-year'),
('Mechanical Engineering (Building Services)', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering-building-services-beng'),
('Mechanical Engineering (Building Services)', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering-building-services-with-foundation-year'),
('Mechanical Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/mechanical-engineering-with-foundation-year'),
('Product Design Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/product-design-engineering-beng'),
('Product Design Engineering', (SELECT value FROM Degree WHERE iD=3), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/product-design-engineering-meng'),
('Product Design Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/product-design-engineering-with-foundation-year'),
('Software Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, FALSE,
'www.canterbury.ac.uk/study-here/courses/software-engineering'),
('Software Engineering', (SELECT value FROM Degree WHERE iD=1), TRUE, TRUE,
'www.canterbury.ac.uk/study-here/courses/software-engineering-with-foundation-year'),
-- From the postgrad tab:
('Advanced Manufacturing Systems and Technology', (SELECT value FROM Degree WHERE iD=4), FALSE, FALSE,
'www.canterbury.ac.uk/study-here/courses/postgraduate/advanced-manufacturing-systems-and-technology'),
('Advanced Manufacturing Systems and Technology with Robotics', (SELECT value FROM Degree WHERE iD=4), FALSE, FALSE,
'www.canterbury.ac.uk/study-here/courses/postgraduate/advanced-manufacturing-systems-and-technology-with-robotics'),
('Cybersecurity Technology', (SELECT value FROM Degree WHERE iD=4), FALSE, FALSE,
'www.canterbury.ac.uk/study-here/courses/postgraduate/cybersecurity-technology'),
('Data Intelligence', (SELECT value FROM Degree WHERE iD=4), FALSE, FALSE,
'www.canterbury.ac.uk/study-here/courses/postgraduate/data-intelligence'),
('Internet of Things Engineering', (SELECT value FROM Degree WHERE iD=4), FALSE, FALSE,
'www.canterbury.ac.uk/study-here/courses/postgraduate/internet-of-things-engineering')
;