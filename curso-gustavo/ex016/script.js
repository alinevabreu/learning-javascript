/* Vamos Contar (centralizado)
Inicio: digitar um numero
Fim: Digitar um numero
Passo: digitar o intervalo (caixa de texto do tipo numerico)
botao Contar
Aparece o texto : Preparando a conatgem...
Curso em video (centralizado)
Cor de fundo azul e letras brancas
*/
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[Erro] Faltam Dados')
        res.innerHTML = 'Impossível contar!'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1 ')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }

}