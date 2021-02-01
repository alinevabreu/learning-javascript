class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pega somente a propriedade tela
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        // caminho do arquivo, sempre relativo ao index.html!
        this.heroisIniciais = [
            { img: './arquivos/suicide.png', nome: 'suicide' },
            { img: './arquivos/ariel.png', nome: 'ariel' },
            { img: './arquivos/bela.png', nome: 'bela' },
            { img: './arquivos/brancadeneve.png', nome: 'brancadeneve' }

        ]
        this.iconePadrao = './arquivos/avatar.png' 
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    // para usar o this, nao podemos usar o static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // colocar todos esses herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forca a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

    async embaralhar() {
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
        this.tela.exibirCarregando()

        const IdDoIntervalo = this.tela.iniciarContador()
        // vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)  
        this.tela.limparContador(IdDoIntervalo)  
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
        
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
        this.heroisEscondidos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi){
        // vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // vamos obter somente a imagem dele
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
        // vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id, nome) {
        const item = {id, nome}
        // vamos verificar a quantidade de herois selecionados
        // e tomar acao se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela proxima
                // clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade for 1, significa 
                // que o usuario pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conformes
                // o esperado
                if(opcao1.nome === item.nome &&
                 // aqui verificamos se sao ids diferentes para
                 //o usuario nao clicar duas vezes no mesmo
                 opcao1.id !== item.id      
                ) {
                    this.exibirHerois(item.nome)
                    // como o padrao é true nao precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execucao
                    return;
                }
                this.tela.exibirMensagem(false)
                // fim do case!
                break;

        }
    }
    mostrarHeroisEscondidos(){
        // vamos pegar todos os herois da tela e colocar seu
        // respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos) {
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }
    jogar() {
        this.embaralhar()
    }
}