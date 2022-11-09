function gravar() {
    var form = document.getElementById("form-cadastro");
    var dados = new FormData(form);

    fetch("../php/recebe-usuario.php", {
        method: "GET",
    }).then(async function (data) {
        var bdata = data.json();
        if (verificarUsuarioRepitido(dados, bdata) == false) {
            fetch("../php/insere-usuario.php", {
                method: "POST",
                body: dados
            })
            window.location.replace("../html/login.html");
        } else {
            alert("nome do usuario já está em uso.")
        }
    });


}
function logar() {
    var form = document.getElementById("form-login");
    var fdata = new FormData(form);
    fetch("../php/recebe-usuario.php", {
        method: "GET",
    }).then(async function (result) {
        var bdata = await result.json();
        if (validar(fdata, bdata)) {
            window.location.replace("../index.html");
        } else {
            alert("Senha,incorreta tente de novo.")
        }
    });
}
function validar(fdata, bdata) {
    var i = 0;
    while (i < bdata.length) {
        // console.log(dados.usuario + "/" + bd_dados[i].usuario)
        if (fdata.get("usuario") == bdata[i].usuario) {
            return fdata.get("senha") == bdata[i].senha;
        }
        i++;
    }
    return false;
}
function verificarUsuarioRepitido(fdata, bdata) {
    var i = 0;
    while (i < bdata.length) {
        // console.log(dados.usuario + "/" + bd_dados[i].usuario)
        if (fdata.get("usuario") == bdata[i].usuario) {
            return true;
        }
        i++;
    }
    return false;
}