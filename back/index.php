<?php

    header("Access-Control-Allow-Headers: ./*");
    header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, , x-requested-with, x-requested-by, Content-Type, X-Auth-Token , Authorization');

    echo "Connected successfully<br />\n";

 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>lol</title>
  </head>
  <body>
<h1>ajout d'histoire</h1>
<form class="formulaire" action="nouvelleentree.php" method="post">
  <p>Nom:</p>
  <input type="text" name="nom" value="">
  <p>Prénom:</p>
  <input type="text" name="prenom" value="">
  <p>Âge:</p>
  <input type="text" name="age" value="">
  <p>Ville:</p>
  <input type="text" name="ville" value="">
  <p>longitude:</p>
  <input type="text" name="longitude" value="">
  <p>latitude:</p>
  <input type="text" name="latitude" value="">
  <p>histoire:</p>
  <textarea name="histoire" rows="8" cols="80"></textarea>
  <input type="hidden" name="token" id="token" value="<?php echo $token; ?>" />
  <button type="submit" name="button">envoyer</button>
</form>
  </body>
</html>
