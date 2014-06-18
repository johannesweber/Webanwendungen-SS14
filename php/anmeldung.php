<?php

$cebit = fopen("../txt/cebit.txt", "r+");

$vorname = $_GET["vorname"];
echo $vorname;

$nachname = $_GET["name"];
echo $nachname;

$email = $_GET["email"];
echo $email;

$matrikelnr = $_GET["matrikelnr"];
echo $matrikelnr;

$handy = $_GET["handy"];
echo $handy;

$studiengang = $_GET["studiengang"];
echo $studiengang;

$messe = $_GET["messe"];
echo $messe;

fwrite($cebit, $vorname);

fclose($cebit);

?>