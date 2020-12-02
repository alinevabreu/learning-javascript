//Velocidade maxima de ate 70km
//A cada 5k acima voce ganha 1 ponto na carteira
//Math.floor()
//Caso os pontos maior que 12 => "Carteira suspendida"

verificarVelocidade(160);
function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade-velocidadeMaxima) / kmPorPonto));
        if ( pontos >= 12) 
            console.log('Carteira Suspensa');
        else 
            console.log('Pontos', pontos);
    }
}