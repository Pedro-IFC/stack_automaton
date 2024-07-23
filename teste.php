<?php
require_once 'functions.php';
// Caminho para o arquivo JSON
$filename = 'teste.json';

// Lê o conteúdo do arquivo JSON
$jsonContent = file_get_contents($filename);

// Verifica se o arquivo foi lido corretamente
if ($jsonContent === false) {
    die('Erro ao ler o arquivo JSON.');
}

// Decodifica o JSON
$data = json_decode($jsonContent, true);
if (json_last_error() === JSON_ERROR_NONE) {
} else {
    echo 'Erro na decodificação do JSON: ' . json_last_error_msg();
}
$status = automatoAP("aaabbab", "q0", "f", $data, ["z0"]) ? "Válido" : "Falso";
echo $status;
?>
