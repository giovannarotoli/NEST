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

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves =  Object.keys(pessoas);

const listaDevolta = chaves.map((chave)=> ({ 
    nome: chave, 
    idade: pessoas[chave].idade}
));

// console.log(pessoas);
// console.log(chaves);
console.log(listaDevolta);