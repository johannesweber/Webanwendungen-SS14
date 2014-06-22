<?php

header("Content-Type : application/json");

if($_GET['messe'] == 'kostentabelle'){
    $daten = file_get_contents("../json/kosten.json");
}

if($_GET['messe'] == 'cebittabelle'){
    $daten = file_get_contents("../json/cebit.json");
}

if($_GET['messe'] == 'conhittabelle'){
    $daten = file_get_contents("../json/conhit.json");
}

if($_GET['messe'] == 'webtechcontabelle'){
    $daten = file_get_contents("../json/webtechcon.json");
}

echo $daten;

?>