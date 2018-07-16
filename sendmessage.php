<?php

if(isset($_POST['box_message'])){
	$base			 = 'http://www.fdavid.com.br';
	$to				 = 'contato@fdavid.com.br';
    
    $headers 		 = "Content-Type: text/html; charset=utf-8\n";  
	$headers		.= 'From: "'.$_POST['name'].'" <'.$_POST['email']."> \n";
	$headers		.= 'Reply-to: "'.$_POST['name'].'" <'.$_POST['email']."> \n";
    
    $subject		 = 'Contact from website';

	$message = $_POST['message'];

	if	( mail($to,$subject,$message,$headers) ){
        echo "<script type='text/javascript'> alert('Message sent success');window.location= '$base';</script>";
	} else {
    	echo "<script type='text/javascript'> alert('Error sending message')</script>";
	}
}

?>
