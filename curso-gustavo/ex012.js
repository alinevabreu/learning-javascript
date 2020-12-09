var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 1 && hora < 5) {
    console.log('BOA MADRUGADA!')
}else if (hora < 12) {
    console.log('BOM DIA!')
}else if (hora <=18) {
    console.log('BOA TARDE!')
}else {
    console.log('BOA NOITE!')
}