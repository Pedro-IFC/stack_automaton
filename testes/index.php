<?php 
require_once '../functions.php';
$ab_iguais=[
    'q0' => [
        '&' => [
            'z0' => ['q1', ["z0"]]
        ],
        'a' => [
            'z0' => ['q1', ['z0','x']],
        ],
        'b' => [
            'z0' => ['q1', ['z0','y']],
        ]
    ],
    'q1' => [
        '&' => [
            'z0' => ['f', ['z0']]
        ],
        'a' => [
            'x' => ['q1', ['x','x']],
            'z0' => ['q1', ['z0','x']],
            'y' => ['q1', []]
        ],
        'b' => [
            'x' => ['q1', []],
            'y' => ['q1', ['y','y']],
            'z0' => ['q1', ['z0', 'y']]
        ]
    ],
    'f' => []
];
$return = automatoAP("aaabbab", "q0", "f", $ab_iguais, ["z0"]);
var_dump(($return));