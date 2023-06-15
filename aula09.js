const lista = [
    {
        nome:'Jose',
        idade: 13,
        cartoes: ['3244', '5435']
    },
    {
        nome:'Luana',
        idade: 13,
        cartoes: ['3774', '8895']
    },
    {
        nome:'Adriano',
        idade: 26,
        cartoes: ['2004', '0804']
    },
    {
        nome:'Jose Arnaldo',
        idade: 23,
        cartoes: ['7654', '4350']
    },
    {
        nome:'Anderson',
        idade: 14,
        cartoes: ['9244', '7835']
    }, 
    {
        nome:'Ana',
        idade: 16,
        cartoes: ['6214', '0435']
    }, 
    {
        nome:'Gabriel',
        idade: 18,
        cartoes: ['0804', '5475']
    },
    {
        nome:'Adriana',
        idade: 12,
        cartoes: ['1244', '8435']
    },
    {
        nome:'Laura',
        idade: 72,
        cartoes: ['3240', '7405']
    },
    {
        nome:'Dorivaldo',
        idade: 56,
        cartoes: ['3249', '4635']
    },
    {
        nome:'Cleide',
        idade: 98,
        cartoes: ['3654', '5735']
    },
    {
        nome:'Nelson',
        idade: 42,
        cartoes: ['3644', '5436']
    },
    {
        nome:'Maria',
        idade: 69,
        cartoes: ['3344', '5235']
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);
console.log(cartoes)