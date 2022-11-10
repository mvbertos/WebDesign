var depoimentos = [['Rodrigo', '59', 'Professor'],
['João', '30', 'Programador'],
['Leticia', '17', 'Estágiaria']];

function listarContatos() {
    

    
    console.log("listando")
    document.getElementById("contatos-content").innerHTML = "";
    for (var i = 0; i < depoimentos.length; i++) {
        var conteudo = "";
        conteudo += '<div class="contact">';
        conteudo += '<div>';
        conteudo += '<p>' + depoimentos[i][0] + '</p>';
        conteudo += '</div>';
        conteudo += '<div >';
        conteudo += '<p>' + depoimentos[i][1] + '</p>';
        conteudo += '</div>';
        conteudo += '<div>';
        conteudo += '<p>' + depoimentos[i][2] + '</p>';
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("contatos-content").innerHTML += conteudo;
    }
}