const valores = [7.7, 8.9, 6.3, 9.2] //criação de um array
console.log(valores[0], valores[3])
//console.log(valores[4])

valores[4] = 10 //inseri mais um valor dentro do array
console.log(valores)
console.log(valores.length)//retonar o tamanha de itens no array

valores.push({id: 3}, false, null, 'teste') //inseri varios valores de uma vez
console.log(valores)

console.log(valores.pop()) //remove o ultio valor que foi inserido 

delete valores[0] //remove o valor na posição mencionada 
console.log(valores)

console.log(typeof valores) //retorna o tipo de dado do 'valores'