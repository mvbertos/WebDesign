var depoimentos = [['mustacheCat.jpeg', 'Robilson', 'Nunca fui tão longe em um jogo quanto fui na do corintians!'],
['sexyboi.gif', 'Marvin', 'Devia ter ido comprar o jogo do pelé! >:('],
['ronaldo.jpeg', 'Ronaldo Evangelico', 'Vim falar mal, porque odeio o gerente dessa empresa!']];

var listaProdutos = [['MineirinhoAdventures.jpg', 'Mineirinho Adventures',],
['SonicaTheheadhog.jpeg', 'Sonica The Headhog'],
['Monic.jpg', 'Monic (2021)']];



window.onload = function () {
    mostrarDepoimentos();
    montarCardProdutos();
}

function mostrarDepoimentos() {

    document.getElementById("div-depoimentos").innerHTML = "";
    for (var i = 0; i < depoimentos.length; i++) {
        var conteudo = "";
        conteudo += '<div class="div-clientes">';
        conteudo += '<div class="div-img-cliente">';
        conteudo += '<img src="img/' + depoimentos[i][0] + '"/>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao-clientes">';
        conteudo += '"' + depoimentos[i][2] + '"';
        conteudo += '</div>';
        conteudo += '<div class="div-autor-clientes">';
        conteudo += depoimentos[i][1];
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("div-depoimentos").innerHTML += conteudo;
    }
}

function montarCardProdutos() {

    for (var i = 0; i < listaProdutos.length; i++) {
        var conteudo = "";
        conteudo += '<div class="div-jogo">';
        conteudo += '<img src="img/' + listaProdutos[i][0] + '">';
        conteudo += '<div class="div-descricao-produto">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("produtos-bg").innerHTML += conteudo;
    }

}