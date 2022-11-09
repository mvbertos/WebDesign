var listaProdutos = [ [0, 'Jogo Cownting Stars.png', false, 'Cownting Stars'], [1, 'Jogo Eclipse 97.png', false, 'Eclipse 97'], [2,'Jogo FWN.png', false, 'Favorite Worst Nightmare'],[3, 'Jogo Paper Theater.png', false, 'Paper Theater'], [4, 'Jogo Crystal Keeper.png', false, 'Crystal Keeper'], [5, 'Jogo Else Where.png', false, 'Else Where'] ]

var carrinho = [];

window.onload = function(){

    montarCardProdutos();

}

function montarCardProdutos(){

    document.getElementById("div-produtos").innerHTML= "";

    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="card-img">' ;
        conteudo += '<img src="../img/'+ listaProdutos[i][1] +'">';
        conteudo += '</div>';
        
        if(listaProdutos[i][2] == false){
            conteudo += '<div class="card-comprar" onclick="comprar('+listaProdutos[i][0] +')">';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }else{
            conteudo += '<div class="card-comprar produto-carrinho">';
            conteudo += 'Adicionado ao Carrinho!';
            conteudo += '</div>';
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
    
}

function comprar(id){

    listaProdutos[id][2] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));

    montarCardProdutos();
}

function mudaPagCarrinho(){
    
    window.location.href = "carrinho.html"
}
