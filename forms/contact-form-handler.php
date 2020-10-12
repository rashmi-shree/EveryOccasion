<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$email_from = "everyoccasion.in";

	$email_body = "User name: $name.\n".
						"User Email: $visitor_email.\n". 
							"User Message: $message.\n";

	$to = "rashmidivya.shree6@gmail.com";

	$headers = "From : $email_from \r\n";

	$headers = "Reply-To: $visitor_email \r\n";

	mail($to, $subject, $email_body,$headers);

	header("location: index.html");
?>