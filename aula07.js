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
]

lista.sort((a,b) =>{
    if (a.nome.toUpperCase() < b.nome.toUpperCase()){
        return -1;
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }
    return 0; 
})

console.log(lista)