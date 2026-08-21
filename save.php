<?php
$data = $_POST['text'] ?? '';
file_put_contents("savedText.txt", $data);
echo "OK";
?>

