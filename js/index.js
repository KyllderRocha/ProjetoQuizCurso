perguntas = [
    {
    "pergunta": "Você tem bom um raciocínio lógico",
    "curso": "TI",
    "id":1
    },
    {
    "pergunta": "Gosta de resolver problemas?",
    "curso": "TI",
    "id":2
    },
    {
    "pergunta": "Você gosta de inglês?",
    "curso": "TI",
    "id":3
    },
    {
    "pergunta": "Você se considera uma pessoa concentrada?",
    "curso": "TI",
    "id":4
    },
    {
    "pergunta": "Costuma ter ideias que envolvam muito a tecnologia?",
    "curso": "TI",
    "id":5
    },
    {
    "pergunta": "Você tem interesse em programação?",
    "curso": "TI",
    "id":6
    },
    {
    "pergunta": "Acredita que a tecnologia pode mudar o mundo em que vivemos?",
    "curso": "TI",
    "id":7
    },
    {
    "pergunta": "Sabe onde atua um profissional de programação?",
    "curso": "TI",
    "id":8
    },
    {
    "pergunta": "Já teve algum contato com a área de TI?",
    "curso": "TI",
    "id":9
    },
    {
    "pergunta": "Você se considera uma pessoa proativa?",
    "curso": "TI",
    "id":10
    },
    {
    "pergunta": "Você já tem algum tipo de conhecimento na área de Meio Ambiente?",
    "curso": "TMA",
    "id":11
    },
    {
    "pergunta": "Conhece a grade curricular do curso?",
    "curso": "TMA",
    "id":1
    },
    {
    "pergunta": "Já teve interesse em criar algum projeto que possa ajudar o meio ambiente?",
    "curso": "TMA",
    "id":12
    },
    {
    "pergunta": "Já teve contato com laboratório antes?",
    "curso": "TMA",
    "id":13
    },
    {
    "pergunta": "Sabe em qual área atua um profissional ambientalista?",
    "curso": "TMA",
    "id":14
    },
    {
    "pergunta": "Você conhece a matéria educação ambiental?",
    "curso": "TMA",
    "id":15
    },
    {
    "pergunta": "Sobre educação ambiental, já aplicou alguma vez a coleta seletiva?",
    "curso": "TMA",
    "id":16
    },
    {
    "pergunta": "Já ouviu falar sobre microbiologia e tem interesse?",
    "curso": "TMA",
    "id":17
    },
    {
    "pergunta": "Você é alguém que se preocupa com os processos de degradação ambiental?",
    "curso": "TMA",
    "id":18
    },
    {
    "pergunta": "Você conhece os 3Rs' que ajudam a preservar o meio ambiente?",
    "curso": "TMA",
    "id":19
    },
    {
    "pergunta": "Já teve interesse em saber fazer manutenção de sistemas eletrônicos?",
    "curso": "TEE",
    "id":20
    },
    {
    "pergunta": "Já ouviu falar na grade de matérias que o curso de elétrica possui?",
    "curso": "TEE",
    "id":21
    },
    {
    "pergunta": "Já pensou em trabalhar com montagem eletrônicos?",
    "curso": "TEE",
    "id":22
    },
    {
    "pergunta": "Você tem noção das oportunidades que os cursos de elétrica oferecem?",
    "curso": "TEE",
    "id":23
    },
    {
    "pergunta": "Se interessa em trabalhar em laboratórios de desenvolvimento de equipamentos eletrônicos?",
    "curso": "TEE",
    "id":24
    },
    {
    "pergunta": "Qual o seu nível de aprendizado em cálculos?",
    "curso": "TEE",
    "id":25
    },
    {
    "pergunta": "Planeja seguir no mercado de trabalho na área elétrica?",
    "curso": "TEE",
    "id":26
    },
    {
    "pergunta": "Você sabia que também tem programação em Engenharia Elétrica?",
    "curso": "TEE",
    "id":27
    },
    {
    "pergunta": "Tem interesse em coordenar e executar ações de conservação de energia?",
    "curso": "TEE",
    "id":28
    },
    {
    "pergunta": "Tem interesse em aprender manutenção elétrica?",
    "curso": "TEE",
    "id":29
    }
]

document.addEventListener("DOMContentLoaded", function(event) {
    perguntas = shuffle(perguntas);
    form1 = document.getElementById("form1");
    perguntas.forEach(element => {
        var pergunta = document.createElement("p");   
        pergunta.appendChild(document.createTextNode(element["pergunta"]));

        var input = document.createElement("input"); 
        input.setAttribute("type", "radio");
        input.setAttribute("name", element["id"]);
        input.setAttribute("curso", element["curso"]);

        var br = document.createElement("br");

        var sim = document.createElement("label").appendChild(document.createTextNode("Sim")); 
        var nao = document.createElement("label").appendChild(document.createTextNode("Não")); 
        
        form1.appendChild(pergunta);                            
        form1.appendChild(input);                              
        form1.appendChild(sim);                            
        form1.appendChild(br);                         
        form1.appendChild(input.cloneNode());                              
        form1.appendChild(nao);                            
        form1.appendChild(br); 
    });
});

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