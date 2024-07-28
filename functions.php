<?php
error_reporting(E_ALL & ~E_WARNING);

function automatoAP($str, $estadoInicial, $estadosFinais, $delta, $pilha, $alfabeto, $alfabeto_pilha) {
    $resultado = [
        "status" => false,
        "stepby" => ""
    ];
    $estadoAtual = $estadoInicial;
    for ($i = 0; $i <= strlen($str); $i++) {
        $char = $i < strlen($str) ? $str[$i] : "&";
        $topoPilha = array_pop($pilha);
        if(!in_array($char, $alfabeto) && $char!="&"){
            $resultado["stepby"]='O caractere "'.$char.'" está fora do alfabeto';
            return $resultado;
        }
        if(!in_array($topoPilha, $alfabeto_pilha)){
            $resultado["stepby"]='O valor de pilha "'.$topoPilha.'" está fora do alfabeto de pilha';
            return $resultado;
        }
        if (!isset($delta[$estadoAtual][$char])) {
            if (isset($delta[$estadoAtual]["&"])) {
                $char = "&";
                $i--;
            } else if ($char != "&") {
                $resultado['stepby'] .= "($estadoAtual, $char, $topoPilha) -> (?, ?)";
                return $resultado;
            }
        }
        $resultado['stepby'] .= "($estadoAtual, $char, $topoPilha) -> ";
        if ($topoPilha === null) {
            $topoPilha = array_shift($pilha);
        }
        if (isset($delta[$estadoAtual][$char][$topoPilha])) {
            list($novoEstado, $novoTopoPilha) = $delta[$estadoAtual][$char][$topoPilha];
            $estadoAtual = $novoEstado;
            $resultado['stepby'] .= "($estadoAtual";
            if (!empty($novoTopoPilha)) {
                foreach ($novoTopoPilha as $el) {
                    $resultado['stepby'] .= ", $el";
                    array_push($pilha, $el);
                }
            }
            $resultado['stepby'] .= ")<br>";
        } else {
            $resultado['stepby'] .= "($estadoAtual, $topoPilha)<br>";
        }
    }
    $resultado['status'] = in_array($estadoAtual, $estadosFinais);
    return $resultado;
}
function strValida($str, $alfabetoArray){
    $strArray = str_split($str);
    foreach ($strArray as $char) {
        if (!in_array($char, $alfabetoArray)) {
            return false;
        }
    }
    return true;
}
function removerEspacos($array) {
    return array_map('trim', $array);
}

function validaPilha($pilha, $alfabeto) {
    foreach ($pilha as $item) {
        $itemArray = str_split($item);
        foreach ($itemArray as $char) {
            if (!in_array($char, $alfabeto)) {
                return false;
            }
        }
    }
    return true;
}

?>