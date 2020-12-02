// Funcao de fabrica
// camelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligacao...")
        }
    }
}
const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);