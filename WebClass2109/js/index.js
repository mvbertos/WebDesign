function submitData(){

    var form = document.getElementById("form_userData");
    var data = new FormData(form);

    fetch("php/index.php",{
        method: "POST",
        body: data
    });
}