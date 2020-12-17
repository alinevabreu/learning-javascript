function minhaFuncao1(parametro1){
    return `Aeeee`
}

const minhaFuncao2 = function(parametro1) {
    return `Aeeee ${parametro1}`
}
const mihaFuncao3 = (parametro1) => {
    return `Aeeee ${parametro1}`
}
const minhaFuncao4 = parametro1 => `Aeeee (parametro1)`

const obj1 = {
    minhaFuncao: parametro1 => `Aeeee (parametro1)`
}

obj1.minhaFuncao('Test')

const obj2 = {
    minhaFuncao (parametro1){
        return`Aeeee ${parametro1}`
    }
}

obj2.minhaFuncao()