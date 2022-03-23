// Função arrow é uma funcção anonima 

let dobro = function(a){
    return 2 * a
}
//console.log(dobro(10))

dobro = (a) => {
    return 2 * a
}
//console.log(dobro(30))

dobro = a => 2 * a
//console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
//ola = _ => 'Olá, tudo bem?' // possui parametro
console.log(ola())