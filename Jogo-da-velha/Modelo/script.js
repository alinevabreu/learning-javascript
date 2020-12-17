function iniciar() {
  const botoes = document.getElementsByName("botao-jogo");
  for (let botao of botoes) {
    botao.value = " ";
    //botao.removeEventListener('click', jogar);
    botao.addEventListener("click", jogar);
  }
}

let revezador = false;
function jogar(ev) {
  const btn = ev.srcElement;
  if (btn.value != " ") return;

  btn.value = revezador ? "X" : "O";
  revezador = !revezador;

  const vencedor = alguemVenceu();
  
  console.log({vencedor})
  if (vencedor) {
      window.alert(`${vencedor} VENCEU!`)
      return
  }
}

function alguemVenceu() {
  const btn11 = document.getElementById("btn11");
  const btn21 = document.getElementById("btn21");
  const btn31 = document.getElementById("btn31");

  const btn12 = document.getElementById("btn12");
  const btn22 = document.getElementById("btn22");
  const btn32 = document.getElementById("btn32");

  const btn13 = document.getElementById("btn13");
  const btn23 = document.getElementById("btn23");
  const btn33 = document.getElementById("btn33");

  // linhas
  if (btn11.value != " " && btn11.value == btn12.value && btn11.value == btn13.value)
    return btn11.value;

  if (btn21.value != " " && btn21.value == btn22.value && btn21.value == btn23.value)
    return btn21.value;

  if (btn31.value != " " && btn31.value == btn32.value && btn31.value == btn33.value)
    return btn31.value;

  // colunas
  if (btn11.value != " " && btn11.value == btn21.value && btn11.value == btn31.value)
    return btn11.value;

  if (btn12.value != " " && btn12.value == btn22.value && btn12.value == btn32.value)
    return btn12.value;

  if (btn13.value != " " && btn13.value == btn23.value && btn13.value == btn33.value)
    return btn13.value;

  // diagonal
  if (btn11.value != " " && btn11.value == btn22.value && btn11.value == btn33.value)
    return btn11.value;

  if (btn13.value != " " && btn13.value == btn22.value && btn13.value == btn31.value)
    return btn13.value;

  return "";
}
