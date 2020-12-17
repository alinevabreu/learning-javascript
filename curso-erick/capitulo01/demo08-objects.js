const heroi = {
    nome: 'Flash',
    idade: '100',
    sexo: 'masculino'
}

//console.log('nome', heroi.nome)
//console.log('idade', heroi['idade'])
//console.log('sexo', heroi.sexo)
//console.log('naoExiste', heroi.naoExiste)
//heroi.id = 0001
//console.log(heroi)

//Saber as chaves
//console.log(Object.keys(heroi))

//Saber od valores
//console.log(Object.values(heroi))

//Juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}
const novoObj = Object.assign(heroi,pessoa)

//Remover uma chave
delete novoObj.nome

console.log(novoObj)