<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('ag.pavlich@yandex.ru', 'От кого Павлич');
//Кому отправить
$mail->addAddress('pavlichsg@gmail.com');
//Тема письма
$mail->Subject = 'Привет! тема письма с формы';

//Тело письма
$body = '<h1>Письмо с формы обратной связи</h1>'

if (trim(!empty($_POST['name']))) {
    $body.= '<p><strong>Имя:</strong>' .$_POST['name']. '</p>';
    }
if (trim(!empty($_POST['email']))) {
    $body.= '<p><strong>E-mail:</strong>' .$_POST['email']. '</p>';
}

$mail->Body = $body;
//ОТправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

header('Content-type: application/json');
echo json_decode($response)

?>

