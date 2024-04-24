<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses</title>
</head>
<body>
<?php
echo "start of PHP";

#: connection dtails
$servername = "localhost:3306";
$username = "bkpff1y_admin";
$password = "ngszkfkt85nu61dyhivzf";
$dbname = "bkpff1y_course";

#: connection protocals
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error); }

echo "connection finished";

$sql = "SELECT fullName, degree, isUndergrad, hasFoundation, description FROM Courses";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo $row["fullName"]. $row["degree"].$row["isUndergrad"]. "<br>";
    }
  }
  else { echo "0 results"; }

echo "end of PHP";
?>
</body>
</html>


