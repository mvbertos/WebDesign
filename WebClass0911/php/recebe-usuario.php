<?php
include "conexao.php";
$sql = "SELECT * FROM conta";
$result = mysqli_query($con, $sql);
$i = 0;



while ($reg = mysqli_fetch_assoc($result)) {
    $data[$i]["usuario"] = $reg["usuario"];
    $data[$i]["email"] = $reg["email"];
    $data[$i]["senha"] = $reg["senha"];
    $i++;
}

$obj_json = json_encode($data);
echo $obj_json;

?>