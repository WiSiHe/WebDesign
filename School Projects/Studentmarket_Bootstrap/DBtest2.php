
<?php
$servername = "studentmarket.mysql.domeneshop.no";
$username = "studentmarket";
$password = "efgz2b5uSdLvBnH";
$dbname = "studentmarket";

$name = $_POST["name"];
$mail = $_POST["email"];
$userpass = $_POST["password"];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO UserInfo (id, username, password, email, confirmed, signup_date)
VALUES (Null, '$name', '$userpass', '$mail', 'Y', '2016-07-16')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
