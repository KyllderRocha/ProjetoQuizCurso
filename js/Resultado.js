var nome = "", email="", curso="", porcentagem="";

document.addEventListener("DOMContentLoaded", function(event) {
    nome = queryString("nome").replace(/%20/g," ");
    email = queryString("email");
    curso = queryString("curso");
    porcentagem = queryString("porcentagem");

    let nomeHtml = document.getElementById("nome");
    let emailHtml = document.getElementById("email");
    let cursoHtml = document.getElementById("curso");
    let linkHtml = document.getElementById("link");
    let porcentagemHtml = document.getElementById("porcentagem");

    nomeHtml.innerText = nome
    emailHtml.innerText = email
    porcentagemHtml.innerText = porcentagem
    if(curso == "ti"){
        cursoHtml.innerText = "Técnico em Informática"
        linkHtml.setAttribute("href", "TI.html");
    }else if(curso == "tee"){
        cursoHtml.innerText = "Técnico em EletroEletrônica"
        linkHtml.setAttribute("href", "TEE.html");
    }else{
        cursoHtml.innerText = "Técnico em Meio Ambiente"
        linkHtml.setAttribute("href", "TMA.html");
    }

});

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

