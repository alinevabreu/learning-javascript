const txtnome = document.querySelector('input#txtnome')
const res = document.querySelector('div#res')
const divtel = document.querySelector('div#divtel')
const divcel = document.querySelector('div#divcel')

const agenda = [
  {nome: 'Aline', telefone: 123456, celular: 9020384},
  {nome: 'Thiago', telefone: 7891011, celular: 9030508},
  {nome: 'Sofia', telefone: 12131415, celular: 90407094}
]

const txttel = document.createElement('input')
txttel.type = 'text'
txttel.id = 'txttel'
txttel.value = ''
divtel.appendChild(txttel);

const txtcel = document.createElement('input')
txtcel.type = 'text'
txtcel.id = 'txtcel'
txtcel.value = ''
divcel.appendChild(txtcel)

function inserir() {
  if (txtnome.value.length == 0 || txttel.value.length == 0 || txtcel.value.length == 0){
    window.alert('Contato invalido ou ja encontrado na lista.')
    return
  }
  const item = {
    nome: txtnome.value,
    telefone: txttel.value,
    celular: txtcel.value
  }
  agenda.push(item)
  
  console.log(agenda);


  txtnome.value = ''
  txttel.value = ''
  txtcel.value = ''
  txtnome.focus()
}
function listar(){
  if (agenda.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
    return
  
  } else {
       
    agenda.sort(function(itemA, itemB)  {
      console.log(itemA)
      console.log(itemB)
      if (itemA.nome == itemB.nome) return 0;
      if (itemA.nome > itemB.nome) return 1;
      if (itemA.nome < itemB.nome) return -1;
    });

    res.innerHTML = ''
    res.innerHTML += `<p>Temos ${agenda.length} numeros cadastrados.</p>`
    
    agenda.forEach((item) => {
      res.innerHTML += `<p>${item.nome}</p>` 
      res.innerHTML += `<p>${item.telefone}</p>` 
      res.innerHTML += `<p>${item.celular}</p>`    
    })
  }
}


