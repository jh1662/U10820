<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php  //these tags denote PHP code - open
	//variables in php are preceded with a $ symbol 
	//loosely typed language so variables are declared 
	//when used and type allocated at that point
	$message = "Hello World!";
	//php echo command used to write to browser
	//variables in "" are replaced with current value 
	//Very useful in constructing HTML output strings
	echo "<p>$message</p>";
	//single quotes do not expand variable, but you can
	//concatenate strings and variables using the . operator
	echo '<p style="color:steelblue;">' . $message . ' in SteelBlue</p>';

//these tags denote PHP code - close ?>
<p>Right click/view source or F12 to see the actual HTML generated</p>
</body>
</html>
