const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A criação de jardins zoológicos é uma tradição boa para a natureza?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: ["Vários animais foram preservados",
                    "por causa dos zoológicos.",
                ]
            },
            {
                texto: "Não",
                afirmacao: ["Sempre há o risco",
                    "de abuso com os animais...",
                ]
            }
        ]
    },
    {
        enunciado: "Você comeria uma ostra?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: ["Ter novas experiências",
                    "ajuda no desenvolvimento",
                    "do cérebro."
                ]
            },
            {
                texto: "Não...",
                afirmacao: ["As vezes é melhor",
                            "não arriscar, né?",
                        ]
            }
        ]
    },
    {
        enunciado: "Tem como 'ser simpático demais?' ",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Não vale a pena deixar os outros",
                            "pisarem em você.",
            },
            {
                texto: "Não",
                afirmacao: "Ser gentil não é uma fraqueza,",
                        
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
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
