<?php
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
?>