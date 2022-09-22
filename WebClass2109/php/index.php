<?php

// echo $_POST["email"];
    $name = $_POST["name"];
    $idade = $_POST["age"];

    if ($idade > "60") {
        echo "Não paga a passagem do busão \n";
    } elseif ($idade == "60") {
        echo "Que sorte a sua, nunca mais vai ter que pagar a passagem do busão \n";
    } else {
        echo "Que pena você terá que pagar a passagem \n";
    }

    echo "Nome: $name \nIdade: $idade";
?>