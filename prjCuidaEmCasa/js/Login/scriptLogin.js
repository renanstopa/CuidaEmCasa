﻿//localStorage.clear();

$(document).on("click", "#btnLogin", function () {

    function presentAlert() {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'teste';
        alert.header = 'Atenção';
        alert.subHeader = '';
        alert.message = 'O login e/ou senha inserida é inválido, tente novamente!';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        return alert.present();
    }

    $.post("../../lib/libDadosLogin.aspx", { email: $("#txtEmail").val(), senha: $("#txtSenha").val() }, function (retorno) {

        var retorno;
        retornoLogin = retorno.split("|");

        console.log(retornoLogin);

        if (retorno[0] == "erro") {
            console.log("deu erro");
        }

        else {
            if (retornoLogin[0] == "true") {
                localStorage.setItem("usuarioLogado", $("#txtEmail").val());

                localStorage.setItem("tipoUsuario", retornoLogin[1]);

                localStorage.setItem('telefoneUsuario', retornoLogin[2]);

                if (retornoLogin[1] == "1") {
                    window.location.href = "../../pages/administrador/contratarCuidador.html";
                }
                else if (retornoLogin[1] == "2") {
                    window.location.href = "../../pages/cliente/atendimento.html";
                }

                else if (retornoLogin[1] == "3") {
                    window.location.href = "../../pages/cuidador/servicoAgendado.html";
                }

            }
            else {
                presentAlert();
            }
        }
    });
});

