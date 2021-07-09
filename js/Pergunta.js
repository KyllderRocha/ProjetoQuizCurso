perguntas = [
    {
    "pergunta": "Você tem bom um raciocínio lógico?",
    "curso": "TI",
    "id":1,
    "resposta":""
    },
    {
    "pergunta": "Gosta de resolver problemas?",
    "curso": "TI",
    "id":2,
    "resposta":""
    },
    {
    "pergunta": "Você gosta de inglês?",
    "curso": "TI",
    "id":3,
    "resposta":""
    },
    {
    "pergunta": "Você se considera uma pessoa concentrada?",
    "curso": "TI",
    "id":4,
    "resposta":""
    },
    {
    "pergunta": "Costuma ter ideias que envolvam muito a tecnologia?",
    "curso": "TI",
    "id":5,
    "resposta":""
    },
    {
    "pergunta": "Você tem interesse em programação?",
    "curso": "TI",
    "id":6,
    "resposta":""
    },
    {
    "pergunta": "Acredita que a tecnologia pode mudar o mundo em que vivemos?",
    "curso": "TI",
    "id":7,
    "resposta":""
    },
    {
    "pergunta": "Sabe onde atua um profissional de programação?",
    "curso": "TI",
    "id":8,
    "resposta":""
    },
    {
    "pergunta": "Já teve algum contato com a área de TI?",
    "curso": "TI",
    "id":9,
    "resposta":""
    },
    {
    "pergunta": "Você se considera uma pessoa proativa?",
    "curso": "TI",
    "id":10,
    "resposta":""
    },
    {
    "pergunta": "Você já tem algum tipo de conhecimento na área de Meio Ambiente?",
    "curso": "TMA",
    "id":11,
    "resposta":""
    },
    {
    "pergunta": "Conhece a grade curricular do curso de Meio Ambiente?",
    "curso": "TMA",
    "id":12,
    "resposta":""
    },
    {
    "pergunta": "Já teve interesse em criar algum projeto que possa ajudar o meio ambiente?",
    "curso": "TMA",
    "id":13,
    "resposta":""
    },
    {
    "pergunta": "Já teve contato com laboratório antes?",
    "curso": "TMA",
    "id":14,
    "resposta":""
    },
    {
    "pergunta": "Sabe em qual área atua um profissional ambientalista?",
    "curso": "TMA",
    "id":15,
    "resposta":""
    },
    {
    "pergunta": "Você conhece a matéria educação ambiental?",
    "curso": "TMA",
    "id":16,
    "resposta":""
    },
    {
    "pergunta": "Sobre educação ambiental, já aplicou alguma vez a coleta seletiva?",
    "curso": "TMA",
    "id":17,
    "resposta":""
    },
    {
    "pergunta": "Já ouviu falar sobre microbiologia e tem interesse?",
    "curso": "TMA",
    "id":18,
    "resposta":""
    },
    {
    "pergunta": "Você é alguém que se preocupa com os processos de degradação ambiental?",
    "curso": "TMA",
    "id":19,
    "resposta":""
    },
    {
    "pergunta": "Você conhece os 3Rs' que ajudam a preservar o meio ambiente?",
    "curso": "TMA",
    "id":20,
    "resposta":""
    },
    {
    "pergunta": "Já teve interesse em saber fazer manutenção de sistemas eletrônicos?",
    "curso": "TEE",
    "id":21,
    "resposta":""
    },
    {
    "pergunta": "Já ouviu falar na grade de matérias que o curso de elétrica possui?",
    "curso": "TEE",
    "id":22,
    "resposta":""
    },
    {
    "pergunta": "Já pensou em trabalhar com montagem eletrônicos?",
    "curso": "TEE",
    "id":23,
    "resposta":""
    },
    {
    "pergunta": "Você tem noção das oportunidades que os cursos de elétrica oferecem?",
    "curso": "TEE",
    "id":24,
    "resposta":""
    },
    {
    "pergunta": "Se interessa em trabalhar em laboratórios de desenvolvimento de equipamentos eletrônicos?",
    "curso": "TEE",
    "id":25,
    "resposta":""
    },
    {
    "pergunta": "Gosta da área  de cálculos?",
    "curso": "TEE",
    "id":26,
    "resposta":""
    },
    {
    "pergunta": "Planeja seguir no mercado de trabalho na área elétrica?",
    "curso": "TEE",
    "id":27,
    "resposta":""
    },
    {
    "pergunta": "Você sabia que também tem programação em Engenharia Elétrica?",
    "curso": "TEE",
    "id":28,
    "resposta":""
    },
    {
    "pergunta": "Tem interesse em coordenar e executar ações de conservação de energia?",
    "curso": "TEE",
    "id":29,
    "resposta":""
    },
    {
    "pergunta": "Tem interesse em aprender manutenção elétrica?",
    "curso": "TEE",
    "id":30,
    "resposta":""
    }
]
nome = ""
email = ""

document.addEventListener("DOMContentLoaded", function(event) {
    getPerguntas();
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

