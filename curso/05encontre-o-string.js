//Criar um metodo para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string que estao nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2000,
    diretor: 'Robin',
    personagem: 'Thor',
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
        console.log(prop, obj[prop])
}