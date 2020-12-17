//Add novos elementos

const numeros = [1,2,3,4];

//No inicio

numeros.unshift(0);
console.log(numeros);

//No meio

numeros.splice(2,0,1.5);
console.log(numeros);

//No final

numeros.push(5);
console.log(numeros);

