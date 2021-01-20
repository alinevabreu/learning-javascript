class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pega somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela
        // caminho do arquivo, sempre relativo ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/suicide.png', name: 'suicide' },
            { img: './arquivos/ariel.png', name: 'ariel' },
            { img: './arquivos/bela.png', name: 'bela' },
            { img: './arquivos/brancadeneve.png', name: 'brancadeneve' }

        ]
        this.iconePadrao = './arquivos/avatar.png' 
        this.heroisEscondidos = []
    }

    // para usar o this, nao podemos usar o static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // colocar todos esses herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forca a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
            // Duplicar os itens
            .concat(this.heroisIniciais)
            // entrar em cada item e criar um id aleatorio
            .map(item => {
                return Object.assign({}, item, { id: Math.random() / 0.5})
            })
            // ordenar aleatoriamente
            .sort (() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)
    }
    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes pelo icone padrao
        //como fizemos no construtor, vamos extrair somente o necessario
        // usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos: (exemplo di id), o JS entende que o nome 
        // é o mesmo valor. Ex.id: id, vira id,
        const heroisOcultos = herois.map(({ nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }
    jogar() {
        this.embaralhar()
    }
}