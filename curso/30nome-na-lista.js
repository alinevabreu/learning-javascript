const lista = [
    { dono: 'Aline', convidado: 'Thiago'},
    { dono: 'Aline', convidado: 'Alan'}
];

function podeEntrar(dono, convidado) {    
    for( let item of lista)  {
        if (item.dono === dono && item.convidado === convidado) {
            return true;
        }
    }
    return false;
}

const donoFesta = 'Aline';
const convidado = 'Tiago';

const resposta = podeEntrar(donoFesta,convidado);
console.log(
    `${convidado} pode entrar na festa da ${donoFesta}? `, 
    resposta ? 'Pode' : 'Não pode');