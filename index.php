<?php
include 'db.php';

$conn = OpenCon();

if ($conn)
{
    $sql = "CREATE TABLE members (id int, realname varchar(255), email varchar(255), alias varchar(255), discordid int, points varchar(65535), matches varchar(65535));";
    $result = $conn->query($sql);
    if ($result)
    {
        echo "We did it!";
    }
    else
    {
        echo "GG no re";
    }
}
else
{
    echo "Failed to connect";
}

/*$sql = "SELECT * FROM `emails`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $rer = $row["email"] . ",";
        echo $rer;
    }
} else {
    echo "No emails";
}*/
?>