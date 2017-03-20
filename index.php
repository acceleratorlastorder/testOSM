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
    <title>lol</title>
  </head>
  <body>
<h1>ajout d'histoire</h1>
<a href="back/index.php">back</a>
<a href="front/index.html">front</a>
  </body>
</html>
