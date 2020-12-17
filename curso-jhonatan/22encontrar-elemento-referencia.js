// Encontrar um elemento do tipo referencia

const paes = [
    {id: 1, nome: 'doce'},
    {id: 2, nome: 'salgado'}
];

const pao = paes.find(function(pao){
    return pao.nome === 'salgado';
})

console.log(pao);