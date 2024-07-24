<?php
    require_once 'functions.php';
    $json = file_get_contents('php://input');
    $dados = json_decode($json, true);
    $return = automatoAP($dados['string'], $dados['estado_inicial'], $dados['estado_final'], $dados['delta'], $dados['pilha_inicial']);
    echo json_encode([
        $return
    ]);
?>
