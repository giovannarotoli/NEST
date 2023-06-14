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

const buscarPessoa = (pessoa) => pessoa.nome === 'Adriano'

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);