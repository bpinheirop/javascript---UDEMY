const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Pinheiro',
    idade: 24,
    peso: 79
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}