function matchMultiplicationsInExpression(inputString) {
    let pattern = /(-?\d+\.?\d*)\s*\*\s*(-?\d+\.?\d*)/g
    let match = undefined
    while (match = pattern.exec(inputString)) {
        let firstMultiplier = Number(match[1])
        let secondMultiplier = Number(match[2])
        let product = firstMultiplier * secondMultiplier

        inputString = String(inputString).replace(match[0], product)
    }

    console.log(inputString)
}

matchMultiplicationsInExpression('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')