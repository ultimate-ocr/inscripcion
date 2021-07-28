/*$(document).ready(function() {
    getParticipantes();
});*/


function generate_row(info) {
    if (info["paid"] != undefined) {
        console.log(info);
        return (`<tr id="${info["nombre"]}${info["telefono"]}-r" style="text-align:center"><td>${info["nombre"]}</td><td>${info["apellido"]}</td><td>${info["telefono"]}</td><td>${info["email"]}</td><td>${info["bdate"]}</td><td>${info["tel_emergencia"]}</td><td>${info["nombre_emergencia"]}</td><td>${info["tandas"]}</td><td>PAGADO</td></tr>`)
    } else
        return (`<tr id="${info["nombre"]}${info["telefono"]}-r" style="text-align:center; background-color:#ff000059"><td>${info["nombre"]}</td><td>${info["apellido"]}</td><td>${info["telefono"]}</td><td>${info["email"]}</td><td>${info["bdate"]}</td><td>${info["tel_emergencia"]}</td><td>${info["nombre_emergencia"]}</td><td>${info["tandas"]}</td><td id="${info["nombre"]}${info["telefono"]}-b"><button onclick="setPaid('${info["telefono"]}', '${info["nombre"]}')">Marcar pagado</button></td></tr>`)
}


function insertHeader() {
    $("table tbody").append('<tr><th>Nombre</th><th>Apellido</th><th>Teléfono</th><th>email</th><th>fecha nacimiento</th><th>Teléfono emergencia</th><th>Contacto emergencia</th><th>Tanda</th><th>Pagado</th></tr>')
}

function getParticipantes() {
    data = {
        "list": true,
        "force": true
    }
    $.ajax({
        type: "POST",
        url: "https://vi67w2v1k9.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "json",
        data: JSON.stringify(data),

        success: function(response) {
            if (response.statusCode == 200) {
                $("table tbody").empty();
                console.log(response["body"]);
                response = JSON.parse(response["body"])
                    //var tabla = document.getElementById("tabla_participantes");
                insertHeader();
                for (var i = 0; i < response.length; i++) {
                    $("table tbody").append(generate_row(response[i]))
                }
            }
        },
        error: function(response) {}
    });
}


function setPaid(telefono, nombre) {
    data = {
        'pagado': true,
        'telefono': telefono,
        'nombre': nombre
    }
    $.ajax({
        type: "POST",
        url: "https://vi67w2v1k9.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "json",
        data: JSON.stringify(data),

        success: function(response) {
            if (response.statusCode == 200) {
                /*console.log("#" + telefono + nombre + 'r')
                $(nombre + telefono + '-r').css("background-color", "white");
                $(nombre + telefono + '-b').html("PAGADO")
                    //$("#tabla_participantes").show()*/
                getParticipantes()
            } else {
                $("#error_log_in").show()
            }
        },
        error: function(response) {}
    });
}


function checkCredentials(event) {
    data = {
        "list": true,
        "usuario": $("#usuario").val(),
        "pass": $("#pass").val()
    }
    $.ajax({
        type: "POST",
        url: "https://vi67w2v1k9.execute-api.eu-west-1.amazonaws.com/default/inscripcion",
        dataType: "json",
        data: JSON.stringify(data),

        success: function(response) {
            if (response.statusCode == 200) {
                $("#credentials_form").hide()
                $("#tabla_participantes").show()
                console.log(response["body"]);
                response = JSON.parse(response["body"])
                var tabla = document.getElementById("tabla_participantes");
                for (var i = 0; i < response.length; i++) {
                    $("table tbody").append(generate_row(response[i]))
                }
            } else {
                $("#error_log_in").show()
            }
        },
        error: function(response) {}
    });
}