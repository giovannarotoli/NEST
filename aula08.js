const lista = [
    {
        nome:'Jose',
        idade: 13,
        exibir: 'true'
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
    {
        nome:'Laura',
        idade: 72
    },
    {
        nome:'Dorivaldo',
        idade: 56
    },
    {
        nome:'Cleide',
        idade: 98
    },
    {
        nome:'Nelson',
        idade: 42
    },
    {
        nome:'Maria',
        idade: 69
    },
]

const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade >= 10);

console.log('resultado some: ', resultadoSome);
console.log('resultado every: ', resultadoEvery);