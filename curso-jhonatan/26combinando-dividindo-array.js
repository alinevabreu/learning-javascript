//Combinando e cortando um array
//Com tipos primitivos

const primeiro = [1,2,3];
const segundo = [4,5,6];

//Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

//Dividir
const cortado = combinado.slice(1,3);
console.log(cortado);

//Com tipo Objetos
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;

//Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

//Dividir
const cortado = combinado.slice(1);
console.log(cortado);
