function lastKNumbers(n, k) {
    let numbers = []
    numbers.push(1)
    for (let i = 1; i < n; i++) {
        let currentNumber = 0
        let indexBack = Math.min(numbers.length, k)
        for (let innerI = 1; innerI <= indexBack; innerI++) {
            currentNumber += numbers[i - innerI]
        }
        numbers.push(currentNumber)
    }
    console.log(numbers.join(' '))
}