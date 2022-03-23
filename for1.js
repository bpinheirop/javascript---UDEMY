let a = 1

while(a <= 10){
    console.log('contador while: ' + a)
    //console.log('contador = ${a}')
    a++
}

//////////////////////////////////////////////

for(let i = 0; i <= 10; i++){
    console.log('contador for: ' + i)
    //console.log('i = ${i}')
}

//////////////////////////////////////////////

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log('notas: ' + notas[i])
}