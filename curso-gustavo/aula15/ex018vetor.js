let num = [5,8,2,9,3]
num.push(1) //acrescentar na ultima posicao
num.sort() //por em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 7 esta na posiçao ${pos}`)
}
