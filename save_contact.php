<?php
// This retrieves the form data
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phoneNumber = $_POST['phoneNumber'];
$course = $_POST['course'];
$question = $_POST['question'];

// This validates the data and ensure thats there are no empty fields)
if (empty($firstname) || empty($lastname) || empty($email) || empty($phoneNumber) || empty($course) || empty($question)) {
    // Handle empty fields error
    echo "Please fill in all fields.";
    exit;
}

// Save data to database (you can adjust this according to your database setup)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement
$sql = "INSERT INTO contacts (firstname, lastname, email, phone_number, course, question) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $firstname, $lastname, $email, $phoneNumber, $course, $question);

// Execute SQL statement
if ($stmt->execute()) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
