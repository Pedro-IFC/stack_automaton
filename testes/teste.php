<?php
    require_once '../functions.php';
    $filename = 'teste.json';
    $jsonContent = file_get_contents($filename);
    if ($jsonContent === false) {
        die('Erro ao ler o arquivo JSON.');
    }
    $data = json_decode($jsonContent, true);
    if (json_last_error() === JSON_ERROR_NONE) {
    } else {
        echo 'Erro na decodificação do JSON: ' . json_last_error_msg();
    }
    $return = automatoAP("aaabbab", "q0", "f", $data, ["z0"]);
    echo json_encode([
        'status' => $return['status'],
        'stepby' => $return['stepby'],
    ]);
?>
