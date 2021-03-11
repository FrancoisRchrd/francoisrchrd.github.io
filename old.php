<?php 

if(!empty($_GET)) {
	if($_GET["lang"] == "en") {
		include_once "./view/EN-en.html"; 
	}	
	else {
		include_once "./view/FR-fr.html";
	}	
}
else {
	include_once "./view/EN-en.html";
}

//echo "Website under construction";
 ?>