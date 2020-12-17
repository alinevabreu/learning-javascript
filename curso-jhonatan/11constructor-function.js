// Pascal case UmDoisTres (inicia com letra maiuscula)
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligacao...");
    }
}
const celular = new Celular('asus',5.5,5000)
console.log(celular);