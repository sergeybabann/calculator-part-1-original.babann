const calculator = document.querySelector('.calculator')
let history = []
let tempNumber =''
let operationType =''

calculator.addEventListener('click', (event) => {
    const target = event.target
    if(target.classList.contains('calculator__col')) {
    const data = target.dataset.type
    operation(data)
    // console.log(tempNumber)
    renderTotal(tempNumber)
    renderHistory(history)
    }
})


function operation(data) {
    if(data >= 0) {
        operationType = 'number'
        tempNumber = tempNumber + data
    } else if (data === 'float') {
        operationType = 'number'
        if(!/\./.test(tempNumber)) {
        if (tempNumber) {
        tempNumber = tempNumber + '.'
        } else {
            tempNumber = '0.'
        }
    }
} else if (data === 'delete' && operationType === 'number') {
    tempNumber = tempNumber.substring(0, tempNumber.length-1)
    } else if (data === '+' && tempNumber) {
        operationType = data
        history.push(tempNumber, '+')
        tempNumber = ''
    } else if (data === '=') {
        history.push(tempNumber)
        tempNumber =  calculate(history)
        history = []
    }
}

function renderTotal(value) {
    const totalBlock = calculator.querySelector('.calculator__total')
    totalBlock.innerHTML = value
}

function renderHistory(historyArray) {
    const historyBlock = calculator.querySelector('.calculator__history')
    let htmlElements = ''
    historyArray.forEach((item) => {
        if (item >= 0) {
            htmlElements = htmlElements + `&nbsp;<span>${item}</span>`
        } else if (['+', '-', '/', '*', ''].includes(item)) {
            htmlElements = htmlElements + `&nbsp;<strong>${item}</strong>`
        }
    })
    console.log(historyArray)
    historyBlock.innerHTML = htmlElements
    }

    function calculate(historyArray) {
        let total = 0
        historyArray.forEach((item, idx) => {
            if (idx === 0) {
                total = parseFloat(item)
            } else if (idx - 2 >= 0) {
            if (item >= 0) {
            if (historyArray[idx - 1] === '+') {
                total = total + parseFloat(item)
            }
        }
    }
})
// console.log(total)
return total 
}
    




