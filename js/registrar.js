let urlBase = "http://129.158.45.180:8080/api/user";
function validarRegistro() {
    let user = {
        name: $("#nameU").val(),
        email: $("#emailC").val(),
        password: $("#passwordC").val(),
    };
    console.log(user);
    if (camposLlenos(user)) {
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(user),
            url: urlBase + "/new",
            statusCode: {
                201: function (response) {
                    success: {
                        console.log(response);
                        alert("Se registró el usuario correctamente, por seguridad ingresa nuevamente su correo electrónico y contraseña");
                        window.location.href = "login.html";
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("¡Ya existe una cuenta con este usuario! El usuario no se registró correctamente. Por favor ingresa con su correo electrónico y contraseña");
                let opc = confirm('¡Ya existe una cuenta con este usuario! El usuario no se registró correctamente. Por favor verifica si ese es tu correo electrónico y haz clic en Aceptar, de lo contrario haz clic en Cancelar y registrate con un correo electrónico y contraseña nuevos');
                    if (opc) {
                        window.location.href = "registrar.html";
                    } else {
                        email.focus();
                        return 0;
                    }
                window.location.href = "login.html";
            }
        });
    }
}

function camposLlenos(user){
    const name = document.getElementById('nameU');
    console.log(name.value)
    const emailC = document.getElementById('emailC');
    console.log(emailC.value)
    const passwordC = document.getElementById('passwordC');
    console.log(passwordC.value)
    const passwordCC = document.getElementById('passwordCC');
    console.log(passwordCC.value)
    
    if (name.value.length !=0 && emailC.value.length !=0 && passwordC.value.length !=0 && passwordCC.value.length !=0){
        console.log("Campos Llenos");
        if(validarEmail() && validarPassword()){
            console.log("campos OK");
            return true;
        }else{
            return false;
        }
        
    }else {
        if (name.value.length==0 && emailC.value.length==0 && passwordC.value.length==0 && passwordCC.value.length==0){
            alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre, correo electrónico, contraseña y confirme su contraseña.");
            name.focus();
            return false;
        }else{
            if (emailC.value.length==0 && passwordC.value.length==0 && passwordCC.value.length==0){
                alert("Recuerde que todos los campos son obligatorios, por favor escriba su correo electrónico, contraseña y confirme su contraseña.");
                emailC.focus();
                return false;
            }else{
                if (name.value.length==0 && passwordC.value.length==0 && passwordCC.value.length==0){
                    alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre, contraseña y confirme su contraseña.");
                    name.focus();
                    return false;
                }else{
                    if (name.value.length==0 && emailC.value.length==0 && passwordCC.value.length==0){
                        alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre, correo electrónico y confirme su contraseña.");
                        name.focus();
                        return false;
                    }else{
                        if (name.value.length==0 && emailC.value.length==0 && passwordC.value.length==0){
                            alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre, correo electrónico, contraseña.");
                            name.focus();
                            return false; 
                        }else{
                            if(passwordC.value.length==0 && passwordCC.value.length==0){
                                alert("Recuerde que todos los campos son obligatorios, por favor escriba su contraseña y confirme su contraseña.");
                                passwordC.focus();
                                return false;
                            }else {
                                if(emailC.value.length==0 && passwordCC.value.length==0){
                                    alert("Recuerde que todos los campos son obligatorios, por favor escriba su contraseña y confirme su contraseña.");
                                    emailC.focus();
                                    return false;
                                }else {
                                    if(emailC.value.length==0 && passwordC.value.length==0){
                                        alert("Recuerde que todos los campos son obligatorios, por favor escriba su correo electrónico y su contraseña.");
                                        emailC.focus();
                                        return false;
                                    }else {
                                        if(name.value.length==0 && passwordCC.value.length==0){
                                            alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre y confirme su contraseña.");
                                            name.focus();
                                            return false;
                                        }else {
                                            if(name.value.length==0 && passwordC.value.length==0){
                                                alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre y su contraseña.");
                                                name.focus();
                                                return false;
                                            }else {
                                                if(name.value.length==0 && emailC.value.length==0){
                                                    alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre y su correo electrónico.");
                                                    name.focus();
                                                    return false;
                                                }else {
                                                    if(name.value.length==0){
                                                        alert("Recuerde que todos los campos son obligatorios, por favor escriba su nombre.");
                                                        name.focus();
                                                        return false;
                                                    }else {
                                                        if(emailC.value.length==0){
                                                            alert("Recuerde que todos los campos son obligatorios, por favor escriba su correo electrónico.");
                                                            emailC.focus();
                                                            return false;
                                                        }else {
                                                            if(passwordC.value.length==0){
                                                                alert("Recuerde que todos los campos son obligatorios, por favor escriba su contraseña.");
                                                                passwordC.focus();
                                                                return false;
                                                            }else {
                                                                alert("Recuerde que todos los campos son obligatorios, por favor confirme su contraseña.");
                                                                    passwordCC.focus();
                                                                    return false;
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
}

function validarEmail(){
    const emailC = document.getElementById('emailC');
    const expRegemail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    console.log("Ejecutandose la funcion validar Email")
    if (expRegemail.test(emailC.value)==false) {
        alert("Tiene que escribir un email válido")
        emailC.focus()
        return false;        
    }else{
        console.log("Email ok")  
        return true;  
    }
}

function validarPassword(){
    const passwordC = document.getElementById('passwordC');
    console.log(passwordC.value)
    const passwordCC = document.getElementById('passwordCC');
    console.log(passwordCC.value)
    console.log("Ejecutandose la funcion validar contraseñas")
    if (passwordC.value != passwordCC.value) {
        alert("Las contraseñas NO coinciden, por favor verifique su contraseña")
        mostrarPassword();
        mostrarPasswordVerification();
        passwordCC.focus()
        return 0;        
    }else{
        console.log("Password ok")  
        return true;  
    }
}

function mostrarPassword() {
    var cambio = document.getElementById("passwordC");
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

function mostrarPasswordVerification() {
    var cambio = document.getElementById("passwordCC");
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