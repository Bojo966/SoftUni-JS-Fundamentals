function functionalCalc(numberOne, numberTwo, operator) {
    [numberOne, numberTwo] = [numberOne, numberTwo].map(Number)
    let sum = function(numberOne, numberTwo) {
        return numberOne + numberTwo
    }
    let subtraction = function(numberOne, numberTwo) {
        return numberOne - numberTwo
    }
    let multiplication = function(numberOne, numberTwo) {
        return numberOne * numberTwo
    }
    let division = function(numberOne, numberTwo) {
        return numberOne / numberTwo
    }

    let calc = function(numberOne, numberTwo, func) {
        return func(numberOne, numberTwo)
    }

    if (operator === '*') {
        return calc(numberOne, numberTwo, multiplication)
    } else if (operator === '-') {
        return calc(numberOne, numberTwo, subtraction)
    } else if (operator === '+') {
        return calc(numberOne, numberTwo, sum)
    } else if (operator === '/') {
        return division(numberOne, numberTwo)
    }
}