const user = {
    name: 'Guilherme',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    }
    else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    let averageValue
    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }
    averageValue = sum / user.transactions.length

    return averageValue
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        }
        else {
            count.debit++
        }
    }

    return count
}

createTransaction( {type: 'credit', value: 550} )
createTransaction( {type: 'credit', value: 1200} )
createTransaction( {type: 'debit', value: 571.8} )
createTransaction( {type: 'debit', value: 80} )

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())