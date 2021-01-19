class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pega somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela
        // caminho do arquivo, sempre relativo ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/avatar.png', name: 'avatar' },
            { img: './arquivos/ariel.png', name: 'ariel' },
            { img: './arquivos/bela.png', name: 'bela' },
            { img: './arquivos/brancadeneve.png', name: 'brancadeneve' }

        ]
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
    }

    jogar() {
        this.embaralhar()
    }
}