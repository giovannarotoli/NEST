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

//tipo record onde uma de suas chaves é string e o resultado é o objeto
// const pessoa = {
//     adriano:{
//         idade: 19,
//     },
//     ana:{
//         idade: 23,
//     },
//     maria: {
//         idade: 12,
//     }
// }

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const pessoasArray = lista.reduce((acc, objeto)=>{
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Jose.idade);
console.log(pessoasArray);