const usuarios = [
    {
        nome: 'Guilherme',
        receitas: [150.6, 98.3, 340.2, 560.7],
        despesas: [556.5, 13.5, 19.3]
    },
    {
        nome: 'Victor',
        receitas: [145.9, 214.3, 24.6],
        despesas: [85.3, 19.9, 120.0]
    },
    {
        nome: 'Marcio',
        receitas: [340.2, 98.3, 214.1, 450.2, 12.1],
        despesas: [541.7, 19.9, 185.3]
    }
]

function calculaSaldo(receitas, despesas) {
   const somaReceitas = somaNumeros(receitas)
   const somaDespesas = somaNumeros(despesas)

   return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui um saldo positivo de R$${saldo.toFixed(2)}`)
    }
    else {
        console.log(`${usuario.nome} possui um saldo negativo de R$${saldo.toFixed(2)}`)
    }
}