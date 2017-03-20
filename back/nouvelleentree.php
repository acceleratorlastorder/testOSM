<?php
session_start();

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$age = $_POST['age'];
$ville = $_POST['ville'];
$longitude = $_POST['longitude'];
$latitude = $_POST['latitude'];
$histoire = $_POST['histoire'];


echo "nom: " . htmlspecialchars($nom) . "</br>";
echo "prénom: " . htmlspecialchars($prenom) . "</br>";
echo "age: " . htmlspecialchars($age) . "</br>";
echo "ville: " . htmlspecialchars($ville) . "</br>";
echo "longitude: " . htmlspecialchars($longitude) . "</br>";
echo "latitude: " . htmlspecialchars($latitude) . "</br>";
echo "histoire: " . htmlspecialchars($histoire) . "</br>";
echo "token après séssion: " . htmlspecialchars($_POST['token']) . "</br>";
z
//On vérifie que tous les jetons sont là
if (isset($_SESSION['token']) AND isset($_POST['token']) AND !empty($_SESSION['token']) AND !empty($_POST['token'])) {
	// On vérifie que les deux correspondent
	if ($_SESSION['token'] == $_POST['token']) {
		// Vérification terminée
		// On peut supprimer l'utilisateur
		echo "réussite" . "</br>";
		// On vérifie que la requête vient bien du formulaire
		if ($_SERVER['HTTP_REFERER'] == 'http://openstreetmap.local/back/index.php') {
			// On a vérifié la provenance de la requête
			// On peut supprimer

			include_once('DBconnect.php');
			try {
				$dbh = new PDO('mysql:host=localhost;dbname=blogdb;charset=utf8', $dbuname, $dbpass);
				$stmt = $dbh->prepare("SELECT * FROM utilisateurs WHERE login= ? AND password= ?");

				$stmt->execute(array($login, $password));

echo "connection done";


			} catch (PDOException $e) {
				print "Erreur !: " . $e->getMessage() . "<br/>";
				die();
			}

		}

		// La requête vient d'autre part, on bloque
		else {
			echo "La requête ne provient pas du formulaire";
		}

		echo "arf pas bon hé bah alors on essaye de faire de vilaine choses ? :)";
	}
}
else {
	// Les token ne correspondent pas
	// On ne supprime pas
	echo "Erreur de vérification" . "</br>";
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
