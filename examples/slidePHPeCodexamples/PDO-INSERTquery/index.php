<?php
show_source(__FILE__);
#PDO Database connection parameters
$host = 'localhost';	    	#CCCU host address or use 'localhost' on CCCU web host
$db   = 'ils88xt_testDatabase'; #databse you wish to connect to 
$user = 'ils88xt_testUser';		#username you defined to access your database
$pass = 'WebDevModule01';		#password for user to access database
$charset = 'utf8mb4';			#define character set to be used
#create the Data Source Name for a MySQL connection using above variables
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
#driver-specific connection options i.e. define some default actions
$options = [
	PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES   => false,
];
#connect to database
try {
	$pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
	echo '<p>Failed to connect to the database; check your configuration data!</p>';
	echo $e->getMessage(); #display thrown exception error message
	exit(); #terminate PHP script
}

#assign data to be inserted into a table to variables
$author = 'Nelson Mandela';
$content = 'Long Walk to Freedom';
#define the SQL INSERT query
$sql = "INSERT INTO lecture_content (author, postdate, content)
VALUES ('$author', NOW(), '$content')";

#execute PDO query method to run the SQL
try {
		$stmt = $pdo->query($sql); #use PDO query method to create table from $sql
		echo "<p>INSERTed data $author and $content into table 'lecture_content' in database: $db</p>";
} catch (PDOException $e) {
		$errorMessage = $e->getMessage();
		echo "</p>FAILED to INSERT data: $author and $content into lecture_content table!</p>";	
}
?>