const minhaLista = []
const minhaListaDeTarefas = [
    'mandar e-mail',
    'colocar comida para o dog',
    'limpar o quarto'
]
//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[1])
//console.log(minhaListaDeTarefas[4])

//Quantidade de itens no array
//console.log(minhaListaDeTarefas.length)

//Adicinar item
//minhaListaDeTarefas.push('formatar computador')
//console.log(minhaListaDeTarefas)

//Remover o ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

//Remover o primeiro da lista
//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro, minhaListaDeTarefas)

//Remover um indice especifico a partir de um indice
//console.log(minhaListaDeTarefas[2])

//Qual item de inicio
//Quantos remover
//minhaListaDeTarefas.slice(2, 1)
//console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]
//Verificar o tipo do Array
//console.log(typeof(itens))

//Verificar se é Array de forma correta
console.log(Array.isArray(itens))

//Ordenar
//const numeros = [3,2,1,0]
//console.log(numeros.sort())

//Juntar dois arrays
//const novo = itens.concat([1,2,3])
//console.log(novo)

//Juntar arrays em uma string
//console.log(itens.join(','))

//Verificar indice de um array
const index = itens.indexOf('computador')
console.log(itens[index])