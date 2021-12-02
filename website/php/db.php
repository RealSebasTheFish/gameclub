<?php
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "shtechte_guru";
    $dbpass = "SHgameclub2122";
    $db = "shtechte_gameclub";
    try {
        $conn = new PDO("mysql:host=$dbhost;dbname=$db;", $dbuser, $dbpass);
        echo "Connection Successful\n";
        return $conn;
      } catch(PDOException $e) {
        die("Connection failed: " . $e->getMessage());
        return FALSE;
      }
}
 
function CloseCon($conn)
{
    $conn -> close();
}
?>
