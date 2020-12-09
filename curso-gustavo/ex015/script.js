function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'bebemasculino.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmenino.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'feminino.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmenina.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    
    }
}