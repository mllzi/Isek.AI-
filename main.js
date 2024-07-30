const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixas-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado1: "A criação de jardins zoológicos é uma tradição boa para a natureza?",
        
        alternativas: [ 
            {
                texto1: "Sim.",
                afirmação: "Afirmação"
            },
            {
                texto2: "Não.",
                afirmação: "Afirmação"
            }    
        ]
    },

    {
        enunciado2: "Vale a pena comer ostras?",
        
        alternativas: [ 
            {
                texto1: ":3?",
                afirmação: "afirmação*"
            },
            {
                texto2: ":p?",
                afirmação: "afirmação"
            }    
        ]
    },

    {
        enunciado3: "PERGUNTA 3!!!!!!",
        
        alternativas: [ 
            {
                texto1: ":3?",
                afirmação: "afirmação*"
            },
            {
                texto2: ":p?",
                afirmação: "afirmação"
            }    
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respotaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
