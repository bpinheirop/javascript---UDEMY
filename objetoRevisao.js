//coleção dinâmica de pares chave/ valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Bruno',
        idade: 24, 
        endereco : {
            logradouro: 'Rua mozarlandia',
            numero: 123
        }
    },
    condutores : [{
        nome: 'Junior',
        idade: 24
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.preco = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)