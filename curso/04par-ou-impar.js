//Receber uma quantidade de valores para avaliar
//Funcao exibe se é par ou ímpar

exibirTipo(5);
function exibirTipo(limite) {
    for (let i=0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i,'PAR');
        else    
            console.log(i,'ÍMPAR')    
    }
}