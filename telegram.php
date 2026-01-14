<?php

$name = $_POST['client_name'];
$email = $_POST['client_email'];
$message = $_POST['client_message'];

$token = "8567451911:AAHY6fmOUloDuy1gaCDTdPLrw5pah2xqGqI";
$chat_id = "6357169777";

$arr = array(
  'Клиент: ' => $name,
  'Email: ' => $email,
  'Сообщение: ' => $message
);

foreach ($arr as $key => $value) {
  $txt .= $key . "<b> " . urlencode($value) . "</b> " . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  return true;
} else {
  return false;
}
