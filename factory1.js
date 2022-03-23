//Função factory é aquela que retorna um obj
//Factory simples

function criarPessoa(){
    return {
        nome: 'Bruno',
        sobrenome: 'Pinheiro',
        idade: 24,
        email: 'brunopinheiro0127@gmail.com',
        cep: '03383050'
    }
}

console.log(criarPessoa())