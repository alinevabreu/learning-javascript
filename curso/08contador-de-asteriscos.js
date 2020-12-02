// Criar uma funcao que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao)
    }

}