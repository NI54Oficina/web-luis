<?php

require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

                             // Enable verbose debug output

// $mail->isSMTP();             // Set mailer to use SMTP
// $mail->Host = "relay-hosting.secureserver.net";
// $mail->SMTPAuth = false;
// $mail->SMTPSecure = ssl;
// $mail->Username = 'no-replay@kimenastd.com';
// $mail->Password ='Kimena2016';
//
// $mail->Port = 465;

$mail->setFrom('no-replay@kimenastd.com', 'usuarioDemo');
$mail->addAddress('melania.smc@hotmail.com', 'Melania Miranda');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo(  $_POST["email"], 'info');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $_POST["asunto"];
$mail->Body    = $_POST["mensaje"];
// $mail->AltBody = 'PROBANDO RECEPCION MENSAJE';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>
