const nomes = ["Raul", "Miranda", "Evelyn", "Giulia", "Richard", "Fred", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
