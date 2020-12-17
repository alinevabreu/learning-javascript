//Esvaziando um array

let numeros = [1,2,3,4,5,6];
let outros = numeros;

//Solucao 1
//numeros = [];
//console.log(outros);

//SoLucao 2 - MELHOR ESTRATEGIA
numeros.length = 0;
console.log(numeros);
console.log(outros);

//Solucao 3
//numeros.splice(0,numeros.length);
//console.log(numeros);
//console.log(outros);

//Solucao 4
//while (numeros.length < 0)
  //  numeros.pop();
 