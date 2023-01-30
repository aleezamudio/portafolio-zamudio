<?php
$direccion = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];
$para = "juadrigarciagonzalez@gmail.com";
$header = 'From: ' . $direccion;
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
$email = mail($para, $asunto, utf8_decode($mensaje), $header);

if($email) {
    $class = "correcto";
    $texto = "¡Email enviado correctamente!";
    header("refresh: 3; url = ../../index.php");
}else {
    $class = "error_email";
    $texto = "¡Error enviando el email!";
    header("refresh: 3; url = ../../index.php");
}

echo "<div class='" . $class . "'" . ">" . $mensaje . "</div>";

?>