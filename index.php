<!DOCTYPE HMTL PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/HTML4/strict.dtd" >

<html>

<head>
	<title>francis DAVID</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="Content-Language" content="pt-br">

	<meta content="keywords" name="">
	<meta content="description" name="">
	<meta content="robots" name="index, fallow">
	<meta content="robots" name="no-cache">

	<link rel="Shortcut icon" href="" type="image/x-icon">
	<link rel="StyleSheet" href="stylesheet.css" type="text/css">
</head>

<body>

<div id="bodypage"> <!--Corpo da Página-->

	<div id="headflash">
	<a href="http://www.fdavid.com.br/"><img src="header.png"></a>
	</div>

	<div id="main">
	<ul>
		<li class="border_top"><a href="index.php?m=0">Home</a></li>
		<li class="border_top"><a href="http://fdavid.com.br/blog/index.php/category/job/">Jobs</a></li>
		<li class="border_top"><a href="http://fdavid.com.br/blog/index.php/category/robot/">Robots</a></li>
		<li class="border_top"><a href="index.php?m=3">Contact</a></li>
	</ul>
	</div>	

	<?php
		$id = $HTTP_GET_VARS["m"];
		
		switch ($id) { 
			case 3:	include ("contact.html");
				break;
			case 2: include ('business.html');
				break;
			default: include ('home.html');
		}
	?>
	
	<address id="footer">
	Design <a id="afooter"href="http://www.icaropablo.com.br" title="Icaro Pablo">Icaro Pablo</a> 
	</address>

</div> <!-- Fim Body -->

</body>
</html>
