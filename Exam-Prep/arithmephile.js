function solve(inputStrings) {
    let biggestIntervalProduct = Number.MIN_SAFE_INTEGER
    let currentIntervalProduct = 1

    for (var index = 0; index < inputStrings.length; index++) {
        let currentNumber = Number(inputStrings[index])
        if (currentNumber > 0 && currentNumber < 10) {
            currentIntervalProduct = 1
            let wantedIndex = Math.min(index + currentNumber, inputStrings.length)
            for (var sequenceIndex = index + 1; sequenceIndex <= wantedIndex; sequenceIndex++) {
                currentIntervalProduct *= Number(inputStrings[sequenceIndex])
            }

            if (currentIntervalProduct > biggestIntervalProduct) {
                biggestIntervalProduct = currentIntervalProduct
            }
        }
    }

    console.log(biggestIntervalProduct)
}

solve(['10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
])