// Exercício 1

// const name = 'Guilherme'
// const weight = 95
// const height = 1.77
// const imc = weight / (height * height)

// if (imc >= 30) {
//     console.log(`Você está acima do peso ${name}!`)
// } else {
//     console.log(`${name} você não está acima do peso!`)
// }

// Exercício 2

const name2 = 'Marcio'
const age = 53
const sex = 'M'
const contribution = 35

if (age + contribution >= 95 && sex == 'M') {
    console.log(`${name2}, você pode se aposentar!`)
} else if (age + contribution >= 85 && sex == 'F') {
    console.log(`${name2}, você pode se aposentar!`)
} else {
    console.log(`${name2}, você ainda não pode se aposentar!`)
}