function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";

    /*var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert("Name can not less than 2 char");
        return;
    }
    var mobilere = /[0-9]{10}/;
    if (!mobilere.test($("#phone-input").val())) {
        alert("Please enter valid mobile number");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("Please enter your email id");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert("Please enter valid email address");
        return;
    }*/

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var email = $("#email").val();
    var bdate = $("#bdate").val();
    var tel_emergencia = $("#tel_emergencia").val();
    var nombre_emergencia = $("#nombre_emergencia").val();
    var tandas = $("#tandas").val();
    var data = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        bdate: bdate,
        tel_emergencia: tel_emergencia,
        nombre_emergencia: nombre_emergencia,
        tandas: tandas
    };

    $.ajax({
        type: "POST",
        url: "https://0u9avc38cc.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "jsonp",
        crossDomain: "true",
        data: data,
        type: "POST",
        crossDomain: true,

        success: function() {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function() {
            // show an error message
            alert("UnSuccessfull");
        }
    });
}


function getTandas() {
    var data = {
        getTandas: true
    }

    $.ajax({
        type: "POST",
        url: "https://0u9avc38cc.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "jsonp",
        crossDomain: "true",
        data: data,
        type: "POST",
        crossDomain: true,

        success: function() {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function() {
            // show an error message
            alert("UnSuccessfull");
        }
    });
}