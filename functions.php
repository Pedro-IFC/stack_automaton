<?php
function automatoAP($str, $estadoI, $final, $delta, $pilha) {
    $estadoAtual=$estadoI;
    for($i = 0; $i<=strlen($str); $i++){
        $char = $i<strlen($str) ? $str[$i]:"&";
       if(isset($delta[$estadoAtual][$char])){
            if(is_array($delta[$estadoAtual][$char])){
                $pa = array_pop($pilha);
                if($pa==""){
                    $pa = $pilha[0];
                    unset($pilha[0]);
                }
                if(isset($delta[$estadoAtual][$char][$pa])){
                    @$addtopilha = $delta[$estadoAtual][$char][$pa][1];
                    $estadoAtual=$delta[$estadoAtual][$char][$pa][0];
                    if(!is_array($pilha)){
                        $pilha= array();
                    }
                    if(!empty($addtopilha)){
                        foreach($addtopilha as $el){
                            $pilha[]=$el;
                        }
                    }
                }
            }
        }else if(isset($delta[$estadoAtual]["&"])){
            if(is_array($delta[$estadoAtual]["&"])){
                $char="&";
                $pa = array_pop($pilha);
                if($pa==""){
                    $pa = $pilha[0];
                    unset($pilha[0]);
                }
                if(isset($delta[$estadoAtual][$char][$pa])){
                    $addtopilha = $delta[$estadoAtual][$char][$pa][1];
                    $estadoAtual=$delta[$estadoAtual][$char][$pa][0];
                    if(!is_array($pilha)){
                        $pilha= array();
                    }
                    foreach($addtopilha as $el){
                        $pilha[]=$el;
                    }
                }
            }
        }
    }
    return $estadoAtual==$final;
}