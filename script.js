function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";
    var ret = false
    if ($("#nombre").val() == '') {
        document.getElementById("error_nombre").innerHTML = 'Rellena el nombre'
        ret = true
    }
    if ($("#apellido").val() == '') {
        document.getElementById("error_apellido").innerHTML = 'Rellena el apellido'
        ret = true
    }
    if ($("#telefono").val() == '') {
        document.getElementById("error_telefono").innerHTML = 'Rellena el telefono'
        ret = true
    }
    if ($("#email").val() == '') {
        document.getElementById("error_email").innerHTML = 'Rellena el email'
        ret = true
    }
    if ($("#bdate").val() == '') {
        document.getElementById("error_bdate").innerHTML = 'Rellena la fecha de nacimiento'
        ret = true
    }
    if ($("#tel_emergencia").val() == '') {
        document.getElementById("error_tel_emergencia").innerHTML = 'Rellena el teléfono de emergencia'
        ret = true
    }
    if ($("#nombre_emergencia").val() == '') {
        document.getElementById("error_nombre_emergencia").innerHTML = 'Rellena el nombre del contacto de emergencia'
        ret = true
    }
    if ($("#nombre_emergencia").val() == '') {
        document.getElementById("error_nombre_emergencia").innerHTML = 'Rellena el nombre del contacto de emergencia'
        ret = true
    }
    /*if (!($("#tandas").val())) {
        getTandas()
        document.getElementById("error_inscripcion").innerHTML = 'Elige una tanda'
        ret = true
    }*/
    if (ret) return


    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var email = $("#email").val();
    var bdate = $("#bdate").val();
    var tel_emergencia = $("#tel_emergencia").val();
    var nombre_emergencia = $("#nombre_emergencia").val();
    // var tandas = $("#tandas").val();

    var data = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        bdate: bdate,
        tel_emergencia: tel_emergencia,
        nombre_emergencia: nombre_emergencia
        //tandas: tandas
    };

    $.ajax({
        type: "POST",
        url: "https://vi67w2v1k9.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "json",
        data: JSON.stringify(data),

        success: function(response) {
            // clear form and show a success message
            if (response.statusCode == 401) {
                var error_inscripcion = document.getElementById("error_inscripcion");
                error_inscripcion.innerHTML = response.message
                getTandas()
                return
            }
            if (response.statusCode == 402) {
                document.getElementById("error_nombre").innerHTML = response.message;
                document.getElementById("error_telefono").innerHTML = response.message;
            } else {
                window.location.replace("https://www.ultimate-ocr.com/inscripcion-completada");
            }
        },
        error: function(response) {}
    });
}

/*
function getTandas() {
    var data = {
        'getTandas': true
    }

    $.ajax({
        url: "https://vi67w2v1k9.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "json",
        data: JSON.stringify(data),
        type: "POST",

        success: function(response) {
            $('#tandas').empty()
            console.log(response);
            response = JSON.parse(response["body"])
            console.log(response.length)
            var select = document.getElementById("tandas");
            for (var i = 0; i < response.length; i++) {
                var option = document.createElement("option");
                option.text = response[i];
                select.add(option);
            }
        },
        error: function(response) {
            // show an error message
            alert("UnSuccessfull");
            console.log(response)
        }
    });
}*/