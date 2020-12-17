const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 0
if (!saldoEmConta){
    console.log('Nao tem saldo!')
}

const boolComString = "0"
const temValorDentro = !!boolComString
// if (boolComString) {
//     temValorDentro = true
// }
// if (!boolComString) {
//     temValorDentro = false
// }
console.log('Tem valor dentro: ', temValorDentro)

//Forca o valor a true ou false de acordo com a tabela
console.log('boolComString',!!boolComString)


//Negacao
console.log('negacao', !boolComString)

//Negacao + forcar a bool
console.log(
    'negacao + forcar o bool',
    ! (!!boolComString)
)