<?php
show_source(__FILE__);#show PHP source code in Browser; REMOVE FOR PUBLIC RELEASE!!
show_source('html/webForm.html');
#connect to database and return new $pdo object ELSE exit application
include 'database/config.php'; 

#display web data form
include 'html/webForm.html'; 
#display contents of the super global array $_POST[]
echo '<pre>$_POST[]';
print_r($_POST);
echo '</pre>';
if(isset($_POST['submit'])) #user submitted web data form
{    
	#copy data submitted by the user in $_POST to variables
	$author = $_POST['author'];
	$content = $_POST['authorContent'];
	#define SQL query to INSERT data into the database table
	$sql = "INSERT INTO lecture_content (author, postdate, content)
			VALUES (:author, NOW(), :content)";
	#use PDO prepared statements to run the SQL query (guards againt SQL injection attacks
	#run in 2 stages, prepare/execute so actual query and required data are separate
	$stmt = $pdo->prepare($sql);
	$stmt->execute(['author'=>$author, 'content'=>$content]);
	if ($stmt) { 
		echo "New record has been added successfully !";
	} else {
		echo "<p>PDO Error: $sql failed</p>"; 	
	}
#note there is no need to close a PDO connection like you would with a MySQLi connection
}
?>