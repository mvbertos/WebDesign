<?php
    $con =  mysqli_connect("localhost:3306","logout","123","projetofinal");
        
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>