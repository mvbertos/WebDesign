var content = document.getElementById("content");

function ShowNumbers(initVal){
    ClearDisplay();
    var cont = parseInt(initVal);
    while(cont <= parseInt(document.getElementById("value").value)){
        DisplayValue(cont);
        cont+=2;
    }
}

function DisplayValue(val){
    content.innerHTML += "<p>"+val+"</p>";
}
function ClearDisplay(){
    content.innerHTML = "";
}