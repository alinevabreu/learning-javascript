// O operador spread

const primeiro = [1,2,3];
const segundo = [4,5,6];

//Spread

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,...segundo];
console.log(combinado);

//const cortado = combinado.slice();
const clonado = [...combinado];
console.log(combinado);

//Exercicio - resposta 1,2,3,'%',4,5,6
const combinado = [...primeiro,'%',...segundo];
console.log(combinado);
