const txtEntrada = document.querySelector('input#txt-entrada')
let valorMemoria = 0
let operacao = ''
let temQueLimpar = false

const ADICAO = '+'
const SUBTRACAO = '-'
const MULTIPLICACAO = '*'
const DIVISAO = '/'
const PORCENTAGEM = '%'

function resultado() {

    const valorAtual = getValorAtual ()
    let resposta = 0

    if (operacao === ADICAO) {
        resposta = somar (valorMemoria, valorAtual)
    } else if (operacao === SUBTRACAO) {
        resposta = subtrair (valorMemoria, valorAtual)
    } else if (operacao === MULTIPLICACAO) {
        resposta = multiplicar (valorMemoria, valorAtual)
    } else if (operacao === DIVISAO) {
        resposta = dividir (valorMemoria, valorAtual)
    } else if (operacao === PORCENTAGEM) {
        resposta = porcento (valorMemoria, valorAtual)
    }
        setValorAtual (resposta)
}

function subtrair(a, b) {
    return a - b
}

function somar(a, b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}
function porcento(a) {
    return a / 100
}
function setOperacao (novaOperacao) {
    valorMemoria = getValorAtual ()
    operacao = novaOperacao
    temQueLimpar = true

    console.log({operacao, valorMemoria})
}

function insereNumbero (numero) {
    
    if (temQueLimpar) {
        setValorAtual (0)
        temQueLimpar = false
    }

    const valorAtual = getValorAtual()
    if (valorAtual === 0) {
        setValorAtual (numero)
        return
    }

    const novoValor = valorAtual * 10 + numero
    setValorAtual (novoValor)
}

function getValorAtual () {
    return Number(txtEntrada.value)
}

function setValorAtual (numero) {
    txtEntrada.value = numero
}

function limpar() {
    setValorAtual (0)
}