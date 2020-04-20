const users = [
    {
        name: 'Guilherme',
        tecnologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: 'Lui',
        tecnologies: ["Python", "Java", "DevOps"]
    },
    {
        name: 'Marcio',
        tecnologies: ["CSS", "SAP BASIS", "C++", "Node.js"]
    },
    {
        name: 'Victor',
        tecnologies: ["JavaScript", "CSS", "Excel", "Ruby"]
    }
]

// for (let i = 0; i < users.length; i++) {
//     console.log(`${users[i].name} trabalha com ${users[i].tecnologies}`)
// }

function checkIfUsersUsesCSS(users) {
    for (let j = 0; j < users.tecnologies.length; j++) {
        if (users.tecnologies[j] == "CSS") {
            return true
        }
    }
}

for (let i = 0; i < users.length; i++) {
    const userWorkWithCSS = checkIfUsersUsesCSS(users[i])
    if (userWorkWithCSS) {
        console.log(`${users[i].name} trabalha com CSS!`)
    }
}