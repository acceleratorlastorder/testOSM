<?php

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$age = $_POST['age'];
$ville = $_POST['ville'];
$longitude = $_POST['longitude'];
$latitude = $_POST['latitude'];
$histoire = $_POST['histoire'];
session_start();


//On enregistre notre token

$token = bin2hex(mcrypt_create_iv(32, MCRYPT_DEV_URANDOM));


$_SESSION['token'] = $token;

echo "heyyyy </br>";

echo "nom: " . $nom . "</br>";
echo "prénom: " . $prenom . "</br>";
echo "age: " . $age . "</br>";
echo "ville: " . $ville . "</br>";
echo "longitude: " . $longitude . "</br>";
echo "latitude: " . $latitude . "</br>";
echo "histoire: " . $histoire . "</br>";


include_once('DBconnect.php');
try {
    $dbh = new PDO('mysql:host=localhost;dbname=blogdb;charset=utf8', $dbuname, $dbpass);
    $stmt = $dbh->prepare("SELECT * FROM utilisateurs WHERE login= ? AND password= ?");

    $stmt->execute(array($login, $password));
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}


?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>traitement data</title>
  </head>
  <body>
    <h1>lel</h1>

  </body>
</html>
