const enterprise = {
    name: 'Rocketseat',
    color: 'Roxo',
    business: 'Programação',
    address: 'Rua Guilherme Gembala, número 260'
}

console.log(`A empresa ${enterprise.name} está localizada na ${enterprise.address}!`)

const developer = {
    name: 'Guilherme',
    age: 24,
}

const tecnologies = [
    {name: 'C++', spec: 'Desktop'},
    {name: 'JavaScript', spec: 'Web/Mobile'},
    {name: 'Python', spec: 'Data Science'}
]

console.log(`O usuário ${developer.name} tem ${developer.age} anos e usa a tecnologia ${tecnologies[1].name} com especialidade em ${tecnologies[1].spec}!`)