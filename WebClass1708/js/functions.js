var submit_name_btn = document.getElementById("submit_name").addEventListener("click",sayMyName);

function sayMyName(){
    alert(document.getElementById("input_value").value)
    // document.getElementById("content").innerHTML += "<p>"+document.getElementById("input_value").value+"</p>" 
}

