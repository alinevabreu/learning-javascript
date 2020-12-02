function Chocolate(cor, marca, cozinhar) {
    this.cor = cor,
    this.marca = marca,
    this.cozinhar = function () {
        console.log("Derreter na panela...");
    } 
}
const chocolate = new Chocolate('Branco', 'Milka')
console.log(chocolate);    

const novoObjeto = Object.assign({
}, chocolate);
console.log(novoObjeto);

const objeto2 = {...chocolate};
console.log(objeto2);
