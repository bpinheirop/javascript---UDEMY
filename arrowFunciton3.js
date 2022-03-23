 let comparaComThis = function (param){
     console.log(this === param)
 }

 comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)


//AULA 97 - UDEMY 
//ENTENDI MERDA NENHUMA