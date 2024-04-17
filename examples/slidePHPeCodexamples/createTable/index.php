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

#define SQL to create database table if NOT exits
$sql = "CREATE TABLE `lecture_content` 
       ( `id` INT NOT NULL AUTO_INCREMENT , 
         `author` TINYTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
         `postdate` DATETIME NOT NULL , 
         `content` TINYTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
        PRIMARY KEY (`id`)) ENGINE = MyISAM;";
#execute PDO query method to run the SQL
try {
		$stmt = $pdo->query($sql); #use PDO query method to create table from $sql
		echo "<p>Created new table 'lecture_content' in database: $db</p>";
} catch (PDOException $e) {
		$errorMessage = $e->getMessage();
		echo "</p>FAILED to create table: lecture_content - already exits!</p>";	
}
?>