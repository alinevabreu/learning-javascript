let frutasExistenteNoMercado = false
let temCPUSuficiente = true

//obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]

if(isNaN(saldo)) {
    console.log('Valor invalido!')
    return;
}

let tipoCliente = "Premium"
if (saldo < 9) {
    tipoCliente = "Basic"
}
else if(saldo >=10 && saldo < 20) {
    tipoCliente = "Gold"
}
else {
    tipoCliente = null
}
// null, indefined, vazio, 0 ==== false
if (!tipoCliente) {
    tipoCliente = "indefinido"
}
console.log('tipoDoCliente',tipoCliente)

const OperadorOu = 1 > 2 || 2 > 1
const OperadorE = 1 === 1 && 2 !== 2
const OperadorNot = !(1==1)

const idade = 18
const resultado = idade >= 18 ?
                        "pode dirigir" :
                        "nao pode dirigir!!"
console.log('resultado', resultado)                        