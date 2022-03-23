const pessoa = {
    saudacao: 'Bom dia',
    saudacao2: 'Tudobem?',
    falar(){
        console.log(this.saudacao, this.saudacao2)
    }
}
 
pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//Bind deixa você o atributo em this.