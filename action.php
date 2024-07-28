<?php
    require_once 'functions.php';
    $json = file_get_contents('php://input');
    $dados = json_decode($json, true);
    $return = automatoAP($dados['string'], $dados['estado_inicial'], removerEspacos($dados['estado_final']), $dados['delta'], removerEspacos($dados['pilha_inicial']), removerEspacos($dados['alfabeto']), removerEspacos($dados['alfabeto_pilha']));
    echo json_encode([
        $return
    ]);
?>
