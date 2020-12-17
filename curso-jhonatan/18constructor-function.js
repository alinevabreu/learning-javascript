//Criar um objeto postagem
//titulo, mensagem, autor, visualizacoes, comentarios, estarAoVivo

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    estarAoVivo = false
}
let postagem = new Postagem('a','b','c');
console.log(postagem);