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

// Verifica se a decodificação foi bem-sucedida
if (json_last_error() === JSON_ERROR_NONE) {
    echo "<pre>";
    var_dump($data);
    echo "</pre>";
} else {
    echo 'Erro na decodificação do JSON: ' . json_last_error_msg();
}
$status = automatoAP("ab", "q0", "f", $data, ["z0"]) ? "Válido" : "Falso";
echo $status;
?>
