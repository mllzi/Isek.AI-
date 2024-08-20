const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixas-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A criação de jardins zoológicos é uma tradição boa para a natureza?",
        
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
        enunciado: "Vale a pena comer ostras?",
        
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
        enunciado: "PERGUNTA 3!!!!!!",
        
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



function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}



function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
