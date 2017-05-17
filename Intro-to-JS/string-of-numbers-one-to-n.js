function solve(inputNumber) {
    let actualNumber = Number(inputNumber)
    let totalString = ''
    for (let i = 1; i <= actualNumber; i++) {
        totalString += (String(i))
    }

    console.log(totalString)
}