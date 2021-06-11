//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//Erro -> NaN
imprimirSoma(2, 3, 4, 5, 6 ,9) //JavaScript ignora o restando dos números
imprimirSoma()//Erro -> NaN

//Função com retorno

function soma(a, b= 0 ){
    return a + b
}
    console.log(soma(2,3))
    console.log(soma(2)) //retorna 0 pois o b é 0
    console.log(soma())