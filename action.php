<?php
require_once 'functions.php';
$json = file_get_contents('php://input');
$dados = json_decode($json, true);
$status = automatoAP("bba", "q0", "f", $dados, ["z0"]) ? "Válido" : "Falso";
echo json_encode([
    'status' => $status,
]);
?>
