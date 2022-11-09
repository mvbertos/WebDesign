<?php
     
    $usuario = $_POST["usuario"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    include "conexao.php";

    $sql = "INSERT INTO conta (usuario, email, senha) VALUES('$usuario','$email',$senha)";

    if (mysqli_query($con, $sql)) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }

    mysqli_close($con);
?>