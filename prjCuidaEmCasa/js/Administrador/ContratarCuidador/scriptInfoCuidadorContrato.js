﻿$(document).ready(function () {

    $.post("../../../lib/libInfoCuidadorContrato.aspx", { emailCuidador: localStorage.getItem('emailCuidador') }, function (retorno) {
        if (retorno == "false") {
            console.log("deu erro na lib");
        }
        else {
            retorno = retorno.split("|@");
            $('.areaCuidador').html(retorno[1]);
            var url = "data:image/svg+xml+jpeg+jpg;base64," + retorno[0];
            $(".areaImagemCuidador").css("background-image", "url('" + url.replace(/(\r\n|\n|\r)/gm, "") + "')");
        }
    });

});