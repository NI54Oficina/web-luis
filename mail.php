<?php
    $toEmail = "mailpelado";
    $mailHeaders = "From: " . $_POST["nombre"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["asunto"], $_POST["mensaje"], $mailHeaders)) {
    //    print "<p class='success'>Mensaje Enviado</p>";
    } else {
  //      print "<p class='Error'>No se pudo enviar el mensaje</p>";
    }
?>
