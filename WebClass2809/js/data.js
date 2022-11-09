var data

function verifyField(fieldName) {
    if (data.get(fieldName) == "") {
        console.log(fieldName + " field is not informed")
        return false;
    }
    return true;
}

function submitData() {
    var form = document.getElementById("userForm");
    data = new FormData(form);

    var hash = document.getElementById("passwordHash")

    Array.from(form.elements).forEach(element => {
        if (verifyField(element.name) == false) {
            element.toggleClass("invalid");
            console.log("not okay");
            return;
        }
    });

    if (data.get("password") != data.get("cfr_password")) {
        console.log("password don´t match");
        return;
    }


    fetch("php/data.php", { method: "POST", body: data });
}

