<?php
require_once 'functions.php';
$json = file_get_contents('php://input');
$dados = json_decode($json, true);
$status = automatoAP($dados['string'], $dados['estado_inicial'], $dados['estado_final'], $dados['delta'], $dados['pilha_inicial']) ? "Válido" : "Falso";
echo json_encode([
    'response' => $status,
    'send' => $dados,
]);
?>
