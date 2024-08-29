<?php

$tab = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];

function test($arr)
{
    $seTab = [];

    foreach ($arr as $key => $item) {
        $temp = str_split($item);
        sort($temp);
        $seTab[$key] = $temp;
    }
    
    for ($i = 0; $i < count($seTab); $i++) {
        for ($j = 0; $j < count(array_column($seTab, $i)) - 1; $j++) {
    
            if(array_column($seTab, $i)[$j] > array_column($seTab, $i)[$j+1])
            {
                
                return "NO";
            }
        }
    }

    return "YES";
}

echo test($tab);