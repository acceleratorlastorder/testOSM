<?php

//Developpé par stephane.

$user = "root";
$pass = "";

//$bdd = new PDO('mysql:host=localhost;dbname=streetmap', $user, $pass);
//$reponse = $bdd->query('SELECT * from streetmap');

$dbh = new PDO('mysql:host=localhost;dbname=streetmap', $user, $pass);
$req = $dbh->query('SELECT * from streetmap');


$f = fopen("villesetmessages.json","w+");

fwrite($f, "{ \r\n \"histoire\": [ \r\n");
$nmb = $req->rowCount();

$i = 0;

while($donnees = $req->fetch()) {
    if($i < $nmb )
    {
        fwrite($f, "{\n
            \"ID\": \"".$donnees['ID']."\",\n
            \"pays\": \"".$donnees['pays']."\",\n
            \"ville\": \"".$donnees['ville']."\",\n
            \"coordonees\": ".$donnees['coordonees'].",\n
            \"nombredemessage\": ".$donnees['nbmsg']."\n
        },");
    } elseif($i = $nmb)
    {
        fwrite($f, "{\n
            \"ID\": \"".$donnees['ID']."\",\n
            \"pays\": \"".$donnees['pays']."\",\n
            \"ville\": \"".$donnees['ville']."\",\n
            \"coordonees\": ".$donnees['coordonees'].",\n
            \"nombredemessage\": ".$donnees['nbmsg']."\n
        }");
    }
}

fwrite($f, "    ]\n }\n");
fclose($f);

?>