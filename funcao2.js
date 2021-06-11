// Armazenando uma função dentro de uma variável

const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow dentro de uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//Retorno Implicíto 

const substracao = (a,b) => a - b

console.log(substracao(2,1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')