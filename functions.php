<?php
function automatoAP($str, $estadoI, $final, $delta, $pilha) {
    $return=[
        "status"=>false,
        "stepby"=>""
    ];
    $estadoAtual=$estadoI;
    for($i = 0; $i<=strlen($str); $i++){
        $char = $i<strlen($str) ? $str[$i]:"&";
        if(!isset($delta[$estadoAtual][$char])){
            if(isset($delta[$estadoAtual]["&"])){
                $char="&";
            }else if($char!="&"){
                @$return['stepby'].=$char." -> &";
                return $return;
            }
        }
        $pa = array_pop($pilha);
        @$return['stepby'].="(".$estadoAtual.",".$char.",".$pa.") -> ";
        if($pa==""){
            @$pa = $pilha[0];
            unset($pilha[0]);
        }
        if(isset($delta[$estadoAtual][$char][$pa])){
            @$addtopilha = $delta[$estadoAtual][$char][$pa][1];
            $estadoAtual=$delta[$estadoAtual][$char][$pa][0];
            @$return['stepby'].="(".$estadoAtual;
            if(!is_array($pilha)){
                $pilha= array();
            }
            if(!empty($addtopilha)){
                foreach($addtopilha as $el){
                    @$return['stepby'].=",".$el;
                    $pilha[]=$el;
                }
            }
            @$return['stepby'].=")<br>";
        }else{
            @$return['stepby'].="(".$estadoAtual.",".$pa.")";
        }
        //var_dump($pilha);
    }
    $return['status']=$estadoAtual==$final;
    return $return;
}