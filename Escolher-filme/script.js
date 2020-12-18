let tit = document.querySelector('input#txttit')
let cap = document.querySelector('input#txtcap')
let res = document.querySelector('div#res')
let filmes = []

function isTitulo(n) {
  if(n != '')
      return true
    else {
      return false
  }
}
function inLista(n, l) {
  if (l.indexOf(n) != -1){
      return true
  } else {
      return false
  }
}

function inserir() {
  if(isTitulo(tit.value) && !inLista(tit.value, filmes)) {
    const item = {
      titulo: tit.value,
      capa: cap.value
    }
    filmes.push(item)

    atualizar()

  } else {
    window.alert('Filme invalido ou ja encontradona lista.')
  }
  tit.value = ''
  cap.value = ''
  tit.focus()
}

function criarLinha(item) {

  const linha = document.createElement('div')
  const capa = document.createElement('img')
  const titulo = document.createElement ('p')
  const excluir = document.createElement('input')

  excluir.type = 'button'
  excluir.value = 'x'
  const pos = filmes.indexOf(item)
  excluir.addEventListener('click', () => sair(pos))

  titulo.innerHTML = item.titulo
  capa.src = item.capa

  linha.appendChild(titulo)
  linha.appendChild(capa)
  linha.appendChild(excluir)

  return linha
}

function sair(pos){
  console.log({pos})
  filmes.splice(pos,1)
  atualizar()
}

function atualizar(){
  
  console.log('Filmes', filmes)
  res.innerHTML = ''
    for (let filme of filmes) {
      let linha = criarLinha(filme)
      res.appendChild(linha)
    }
}