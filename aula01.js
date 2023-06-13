const lista = [
    {
        nome:'Jose',
        idade: 13
    },
    {
        nome:'Luana',
        idade: 13
    },
    {
        nome:'Adriano',
        idade: 26
    },
    {
        nome:'Jose Arnaldo',
        idade: 23
    },
    {
        nome:'Anderson',
        idade: 14
    }, 
    {
        nome:'Ana',
        idade: 16
    }, 
    {
        nome:'Gabriel',
        idade: 18
    },
    {
        nome:'Adriana',
        idade: 12
    },
]

const converterObjeto = (objeto) => {
    return {
        ...objeto,
        idade: `${objeto.nome} + ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto))