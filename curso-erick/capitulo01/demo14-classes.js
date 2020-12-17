class Heroi{
    atacar(){
        console.log('Atacou!')
    }
    defender(){
        console.log('Defendeu')
    }
}
const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//usando o construtor

class Heroi2 {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    atacar() {
        console.log(
            `o ${this.nome} atacou!!!`
        )
    }
}
const heroi2 = new Heroi2(
    'Flash', 80
)
heroi2.atacar()

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade
    }
}
const anoNascimento = Heroi3.obterAnoNascimento(19)
console.log(
    `o ano de nascimento do heroi e ${anoNascimento}`
)