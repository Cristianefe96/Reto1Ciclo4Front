let urlBase = "http://129.158.45.180:8080/api/user";
function validarLogin() {
    let user = {
        email: $("#email").val(),
        password: $("#password").val()
    }
    console.log(user);
    $.ajax({
        dataType: 'json',
        url: urlBase + "/" + user.email + "/" + user.password,
        type: "GET",
        success: function (response) {
            console.log(response);
            let items = response;
            console.log(items.id);
            if (items.id != null) {
                console.log("true");
                alert("Hola" + " " + items.name + ", ya puedes disfrutar de nuestro catálogo de productos y servicios.")
                window.location.href = "user.html";
                console.log(items.name);
                return true;
            } else {
                console.log("contraseña incorrecta");
                let opc = confirm('¡No existe un usuario! Si deseas crear un usuario haz clic en Aceptar, de lo contrario haz clic en Cancelar y verifica tu contraseña.');
                if (opc) {
                    window.location.href = "registrar.html";
                } else {
                    mostrarPassword();
                    password.focus();

                    return 0;
                }
                return false;
            }
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("¡No existe un usuario! Por favor verifique su correo electrónico y contraseña");
            window.location.href = "login.html";
        }
    });
}

function camposLlenos(user) {
    const email = document.getElementById('email');
    console.log(email.value)
    const password = document.getElementById('password');
    console.log(password.value)

    if (email.value.length != 0 && password.value.length != 0) {
        console.log("Campos Llenos");
        if (validarEmail()) {
            console.log("campos OK");
            return true;
        } else {
            return false;
        }

    } else {
        if (email.value.length == 0 && password.value.length == 0) {
            alert("Recuerde que todos los campos son obligatorios, por favor escriba correo electrónico, contraseña.");
            email.focus();
            return false;
        } else {
            if (email.value.length == 0) {
                alert("Recuerde que todos los campos son obligatorios, por favor escriba su correo electrónico.");
                email.focus();
                return false;
            } else {
                alert("Recuerde que todos los campos son obligatorios, por favor escriba su contraseña.");
                password.focus();
                return false;
            }
        }
    }
}

function validarEmail(user) {
    const email = document.getElementById('email');
    const expRegemail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    console.log("Ejecutandose la funcion validar Email")
    if (expRegemail.test(email.value) == false) {
        alert("Tiene que escribir un email válido")
        email.focus();
        return false;
    } else {
        console.log("Email ok")
        return true;
    }
}

function existeEmail() {
    console.log("funcion email existente")

    let user = {
        email2: $("#email").val(),
        password2: $("#password").val()
    }
    console.log(user);
    if (camposLlenos(user)) {
        $.ajax({
            dataType: 'json',
            url: urlBase + "/" + user.email2,
            type: "GET",
            success: function (response) {
                console.log(response);
                let items = response;
                console.log(items);
                if (items) {
                    console.log("email correcto");
                    validarLogin(); 
                } else {
                    console.log("email incorrecto");
                    let opc = confirm('¡No existe un usuario con este correo electrónico! Si deseas crear un usuario haz clic en Aceptar, de lo contrario haz clic en Cancelar y verifica tu correo electrónico.');
                    if (opc) {
                        window.location.href = "registrar.html";
                    } else {
                        email.focus();
                        return 0;
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                return false;
            }
        });

    }
}

function mostrarPassword() {
    var cambio = document.getElementById("password");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

$(document).ready(function () { // CheckBox mostrar contraseña
    $('#ShowPassword').click(function () {
        $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});

