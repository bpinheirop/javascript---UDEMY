function senhaWifi (senha) {
    if(senha == 123456) {
        console.log('Acesso liberado')
    } else {
        console.log('Senha invalida, tente novamente!')
    }
}

senhaWifi(123456)