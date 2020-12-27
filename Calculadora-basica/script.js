let primeironumero
let segundonumero
let resultado
let operacao


const txtsai = document.querySelector('input#txtsai')
const txtent = document.querySelector('input#txtent')

function numum() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "1"
    }
    else {
    document.txtsai.value = document.txtsai.value + "1"
    }
}
function numdois() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "2"
    }
    else {
    document.txtsai.value = document.txtsai.value + "2"
    }
}
function numtres() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "3"
    }
    else {
    document.txtsai.value = document.txtsai.value + "3"
    }
}
function numquatro() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "4"
    }
    else {
    document.txtsai.value = document.txtsai.value + "4"
    }
}
function numcinco() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "5"
    }
    else {
    document.txtsai.value = document.txtsai.value + "5"
    }
}
function numseis() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "6"
    }
    else {
    document.txtsai.value = document.txtsai.value + "6"
    }
}
function numsete() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "7"
    }
    else {
    document.txtsai.value = document.txtsai.value + "7"
    }
}
function numoito() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "8"
    }
    else {
    document.txtsai.value = document.txtsai.value + "8"
    }
}
function numnove() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "9"
    }
    else {
    document.txtsai.value = document.txtsai.value + "9"
    }
}
function numzero() {
    if (document.txtsai.value == "0" || document.txtsai.value == resultado) {
        document.txtsai.value = "0"
    }
    else {
    document.txtsai.value = document.txtsai.value + "0"
    }
}
function limpar() {
    document.txtsai.value = "0"
    document.textent.value = ""
    return
}
function adicao() {
    operacao = "+"
    primeironumero = parseInt(document.txtsai.value)
    document.txtsai.value = "0"
    document.textent.value = primeironumero + operacao
}