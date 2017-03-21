<?php

//Developpé par stephane.
//réveil dans 5h bordel, j'ai eu un flash dans la nuit j'ai juste simplifié le code.

include_once 'back/DBconnect.php';
echo "salut";

$dbh = new PDO('mysql:host=localhost;dbname=streetmap', $user, $pass);
$req = $dbh->query('SELECT * from streetmap');

$f = fopen("villesetmessages.json","w+");

fwrite($f, "{ \r\n \"histoire\": [ \r\n");
$nmb = $req->rowCount();

$i = 0;

while($donnees = $req->fetch()) {
    $i++;
    if($i < $nmb)
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
        } \n");
    }
}

fwrite($f, "    ]\n }\n");
fclose($f);

?>
