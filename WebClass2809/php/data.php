<?php
    $name = $_POST["name"];
    $surname = $_POST["sur"];
    $registration = $_POST["registration"];
    $email = $_POST["email"];

    $query = "INSERT INTO usuario (name,surname,registration,email) VALUES ($name,$surname,$registration,$email)";
    echo $query;
?>