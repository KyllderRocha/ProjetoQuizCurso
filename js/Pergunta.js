perguntas = []
nome = ""
email = ""
var httpRequest;

document.addEventListener("DOMContentLoaded", function(event) {
    makeRequest();
});

function getPerguntas(){
    perguntas = shuffle(perguntas);
    form1 = document.getElementById("form1");
    
    perguntas.forEach(element => {
        var pergunta = document.createElement("p");   
        pergunta.appendChild(document.createTextNode(element["pergunta"]));

        var input = document.createElement("input"); 
        input.setAttribute("type", "radio");
        input.setAttribute("name", element["id"]);
        input.setAttribute("value", "Sim");
        input.setAttribute("curso", element["curso"]);

        var br = document.createElement("br");

        var sim = document.createElement("label").appendChild(document.createTextNode("Sim")); 
        var nao = document.createElement("label").appendChild(document.createTextNode("Não")); 
        
        form1.appendChild(pergunta);                            
        form1.appendChild(input);                              
        form1.appendChild(sim);                            
        form1.appendChild(br);
        input2 = input.cloneNode();
        input2.setAttribute("value", "Nao");                   
        form1.appendChild(input2);                              
        form1.appendChild(nao);                            
        form1.appendChild(br); 
    });
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}

function salvarPerguntas(){
    nome = document.getElementById("Nome").value;
    email = document.getElementById("Email").value;

    for(let i = 0; i < 30 ; i++){
        let checks = document.getElementsByName(perguntas[i]["id"]+"");
        for (let j = 0; j < checks.length; j++){
            if ( checks[j].checked ) {
                perguntas[i]["resposta"] = checks[j].value
            }
        }
    }

    
}

function calcular(){
    let ti=0, tma=0, tee=0 ;
    perguntas.forEach(element => {
        if(element.resposta=="Sim"){
            if(element.curso == "TI"){
                ti++;
            }else if(element.curso == "TMA"){
                tma++;
            }else{
                tee++;
            }
        }
    });    

    if(tma > tee && tma > ti){
        return {"curso": "tma", "porcentagem": tma*10}
    }else if(tee > ti){
        return {"curso": "tee", "porcentagem": tee*10}
    }else{
        return {"curso": "ti", "porcentagem": ti*10}
    }
}
function salvar(){
    salvarPerguntas();
    if(nome == "" || email == ""){
        alert("Nome ou Email Inválido!")
        return
    }
    var semResp = false;
    perguntas.forEach(element => {
        if(element.resposta == ""){
            semResp = true;
        }
    });
    if(semResp){
        alert("Perguntas sem respostas!")
        return
    }
    let result = calcular()
    window.location = "Resultado.html?nome="+nome+"&email="+email+"&curso="+result["curso"]+"&porcentagem="+result["porcentagem"];
}

function makeRequest() {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
      }
    }

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', "https://my-json-server.typicode.com/thsmmil/restapiQuizCurso/perguntas");
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let retorno = JSON.parse(httpRequest.responseText);
        perguntas = retorno;
        getPerguntas();
      } else {
        alert('There was a problem with the request.');
      }
    }
  }