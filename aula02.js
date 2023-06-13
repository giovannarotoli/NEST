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

// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

let soma = 0;

const somaIdade = (Objeto) =>{
    soma += Objeto.idade
}

lista.forEach(somaIdade);

console.log('Soma: ', soma)