const Eventos = [
    {nome: 'Thiago', pagina: 1, duracao: 7},
    {nome: 'Thiago', pagina: 2, duracao: 3},
    {nome: 'Aline', pagina: 1, duracao: 2},
    {nome: 'Aline', pagina: 2, duracao: 33},
    {nome: 'Alan', pagina: 1, duracao: 2}
];

// Quantas vezes uma pagina é visualizada
function visualizacao (pagina) {
    let view = 0;
    for (let item of Eventos) {
        if(item.pagina === pagina){
            view++;
        }
    }
    return view;
}

const numeroPagina = 3;
const visualizacoes = visualizacao(numeroPagina);
console.log(`Pagina ${numeroPagina} vista ${visualizacoes} vezes.`);

//Qual a duracao da visualizacao
function tempo (pagina) {
    let time = 0;
    for (let item of Eventos) {
        if(item.pagina === pagina){
            time = time + item.duracao;
        }
    }
    return time;
}

const periodo = tempo(numeroPagina);

console.log(`Pagina ${numeroPagina} vista por ${periodo} segundos.`);