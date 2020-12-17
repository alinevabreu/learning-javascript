// Criar um objeto de postagem de blog que vai conter as seguintes propriedades
// Postagem
/*
Titulo
Mensagem
Autor
Visualizacoes
Comentarios
    (autor, mensagem)
estaAoVivo 
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estarAoVivo: true
}

console.log(postagem);
