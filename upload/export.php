<?php


	$data = $_REQUEST['base64data']; 
	echo $data;

	$image = explode('base64,',$data); 

	file_put_contents('img.png', base64_decode($image[1])); 

?>