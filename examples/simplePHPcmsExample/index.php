<?php
	show_source(__FILE__);
	/*PHP program to:
		1. Read text content from a text file with simple pseudo tags marking the content type
		   PG: paragraph
		   Hn: heading at level n
		2. Content is read into an array with each line an element in the array from 0..lastLine
		3. HTML page template is saved in a html sub-folder with a placeholder [+content+]
		4. HTML page template read and assigned to a string variable $html
		5. The content array is iterated over, reading the pseudo content codes to produce associated HTML coding
		6. The created HTML coding replaces the [+content+] placeholder in the HTML template string.
		7. The completed HTML template string is echo'd to the browser.
	*/
	$html = '';
	#read the text content from file into an array
	$contentFile = 'content/content.txt';
	if (file_exists($contentFile)) {
		$contentLinesArray = file($contentFile);
	} else {
		echo "ERROR - file not found: $contentFile";
	}
	#Display how the content read from file looks in the array
	echo '<pre>File Contents read into a PHP array:';
	print_r($contentLinesArray);
	echo '</pre>';
	
	$HTMLtemplate = 'html/home.html';
	if (file_exists($HTMLtemplate)) { #get the HTML page template
		$html .= file_get_contents($HTMLtemplate);
		$content = ''; #intitalise a content variable to hold HTMl content as it is being created
		#iterate over the $contentLinesArray reading the pseudo content codes producing matching HTML element markup
		foreach($contentLinesArray as $line) {
			$lineContentType = substr($line,0,3); #get the content code in first 3 chars of line
			$lineContent = substr($line,3);       #get the content matching the code in rest of the line
			switch ($lineContentType) {
				case 'H1:' : #match 3 possible heading content codes
				case 'H2:' :
				case 'H3:' :
					$headingLevel = substr($lineContentType,1,1); #get the heading level
					$htmlTag = "h$headingLevel"; #create HTML heading element code
					break;
				case 'PG:' : #match the paragraph content code
					$htmlTag = 'p'; #create HTML paragraph element code
			}
			#add the created HTML line element coding to content
			$content .= "<$htmlTag>$lineContent</$htmlTag>"; 
		}
	} else {
		echo "ERROR - file not found: $HTMLtemplate";
	}
	#replace the placeholder in the HTML template file with the created HTML elements from the content file
	echo str_replace('[+content+]',$content,$html); 
?>