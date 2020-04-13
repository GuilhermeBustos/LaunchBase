// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

// Array ou vetor
const alunosDaTurmaA = [
    {
        nome: 'Gustavo',
        nota: 10
    },
    {
        nome: 'Guilherme',
        nota: 10
    },
    {
        nome: 'Victor',
        nota: 10
    },
    {
        nome: 'Felipe',
        nota: 8
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Gabriel',
        nota: 3.5
    },
    {
        nome: 'Vinicius',
        nota: 5
    },
    {
        nome: 'Lui',
        nota: 4.5
    },
    {
        nome: 'Marcio',
        nota: 10
    }
]

// function calculaMedia(alunos) {
//     return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// }

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da ${turma} ficou em ${media}, parabéns!`)
    } else {
        console.log(`A média da ${turma} não ficou legal =( está abaixo de 5!`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')