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

#define the SQL SELECT query
$sql = "SELECT * from lecture_content;";

#execute PDO query method to run the SQL
try {
		$stmt = $pdo->query($sql); #use PDO query method to run $sql query
		$tableData = $stmt->fetchAll(); #retrieve all data from table into 2D array
		#display data retieved from table
		echo '<pre>';
		print_r($tableData);
		echo '</pre>';
		if (count($tableData) > 0) {
			echo "<p>Successfully retrieved data from table 'lecture_content' in database: $db</p>";
			echo "<p>Build the following HTML table from database table data.</p>";
			#build the data into a HTML table...
			$html = '<table>';
			#build table header row using DB table col names
			$html .= '<tr>';
			foreach ($tableData[0] as $colName => $value) { 
				$html .= "<th>$colName</th>";
			}
			$html .= '</tr>'; #close table header row
			#build the HTML table data rows
			foreach ($tableData as $tableRow) {
				$html .= '<tr>';
				foreach ($tableRow as $dataItem) {
					$html .= "<td>$dataItem</td>";
				}
				$html .= '</tr>'; #close table data row
			}
			$html .= '</table>';
			#define some basic CSS to display the HTML table
			echo '<style>
					th, td {
					border:1px solid black;
					padding: 0.5em;
					}
				  </style>';
			#render the HTML table code in the browser
			echo $html;
		} else {
			echo '<p>No data retrieved from the table lecture_content</p>';
		}
} catch (PDOException $e) {
		$errorMessage = $e->getMessage();
		echo "</p>FAILED to run query! $errorMessage</p>";	
}
?>