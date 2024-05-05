<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses</title>
</head>
<body>
<?php
##echo "start of PHP<br>";
##show_source(__FILE__);

#region link to MySQL
#: connection details
#! prefix - bkpff1y
$host = "localhost";
$db = "bkpff1y_course";
$user = "bkpff1y_admin";
$pass = "jh1662.";
$charset = 'utf8mb4';

#: connection request and options
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
	PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES   => false,
];

#: connection protocals
try {
	$pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
	echo '<p>Failed to connect to the database; Please check your internet connection</p>';
	echo $e->getMessage();
	#^ display thrown exception error message
	exit();
}
##echo "connecting finished<br>";
#endregion
#region display from query
$sql = "SELECT fullName, degree, isUndergrad, hasFoundation, description FROM Course";
$result = $pdo->query($sql);
$data = $result->fetchAll();

if (count($data)<2){ echo "Course table is empty!"; exit(); }
#^ make sure table has atleast one record (index 0 is header)

#: create table and populate headers
$html = '<table>';
$html .= '<tr>';
foreach ($data[0] as $column => $value) { $html .= "<th>$column</th>"; }
$html .= '</tr>';

#: populate records
foreach ($data as $row) {
    $html .= '<tr>';
    $colIndex = 0;
    #^ keeps tracks on what column does subjected field belongs to
    foreach ($row as $field) {
        ##if ($colIndex == 4) {$html .= "<td><button onclick='window.location.href='https://$field''>overview</button></td>";}
        if ($colIndex == 4) {$html .= "<td><a href='https://$field'>Click to see overview</a></td>";}
        #^ display URLs as HTML buttons instead
        else { $html .= "<td>$field</td>"; }
        #^ non-URL fields
        $colIndex++;
    }
    $html .= '</tr>';
}

$html .= '</table>';
echo $html;
#endregion
##echo "end of PHP<br>";
?>
</body>
</html>


