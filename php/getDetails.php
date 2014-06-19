<?php
header('Content-Type: application/json');
$kosten = file_get_contents("../json/kosten.json");

echo $kosten;