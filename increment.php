<?php

//Developpé par stephane.

try {
    $bdd = new PDO('mysql:host=localhost;dbname=streetmap;charset=utf8', 'root', '');
} catch (Exception $ex) {
    die('Erreur : ' . $e->getMessage());
}

$f = fopen('test.txt',"W+");

$reponse = $bdd->query('SELECT * FROM streetmap');

fwrite($f, '{ /n "histoire":[ /n');
$nmb = mysql_num_rows($reponse);
$i = 0;

while($donnees = mysql_fetch_array($reponse)) 
{
    if($i < $nmb )
    {
        fwrite($f, '{/n
            "ID": "'.$donnees['id'].'",/n
            "pays": "'.$donnees['pays'].'",/n
            "ville": "'.$donnees['ville'].'",/n
            "coordonees": '.$donnees['coordonees'].',/n
            "nombredemessage": '.$donnees['nbmsg'].'/n
        },');
    } elseif($i = $nmb)
    {
        fwrite($f, '{/n
            "ID": "'.$donnees['id'].'",/n
            "pays": "'.$donnees['pays'].'",/n
            "ville": "'.$donnees['ville'].'",/n
            "coordonees": '.$donnees['coordonees'].',/n
            "nombredemessage": '.$donnees['nbmsg'].'/n
        }');
    }
}

fwrite($f, '    ]/n }/n');
fclose($f);

?>