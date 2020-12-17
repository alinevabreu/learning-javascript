// Criar um array de objetos de faixa de precos para que ele possa ser usado em um site igual ao do mercado livre

//Primeira opcao

let faixas = [
    {tooltips: 'até R$700', minimo:0, maximo:700},
    {tooltips: 'de R$700 a R$1000', minimo:700, maximo:1000},
    {tooltips: 'R$1000 ou mais', minimo:1000, maximo:99999999},
];

//Segunda opcao

function criaFaixaPreco(tooltips, maximo, minimo) {
    return {  tooltips,
              maximo,
              minimo
}
}
let faixa2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,100000)

]

//Terceira Opcao

function faixaPreco(tooltips, maximo, minimo){
    this.tooltips = tooltips;
    this.maximo = maximo;
    this.minimo = minimo
}
let faixa3 = [
    new faixaPreco('d',10,20),
    new faixaPreco('e',20,30),
    new faixaPreco('f',30,40),
]

console.log(faixas);
console.log(faixa2);
console.log(faixa3);