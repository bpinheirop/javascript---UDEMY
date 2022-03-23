
function soBoaNoticia(nota) {
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5)

function seForVeradadeEuFalo(valor){
    if(valor){
        console.log('É verade... ' + valor)
    }
}

seForVeradadeEuFalo()
seForVeradadeEuFalo(null)
seForVeradadeEuFalo(undefined)
seForVeradadeEuFalo(NaN)
seForVeradadeEuFalo('')
seForVeradadeEuFalo(0)
seForVeradadeEuFalo(-1)
