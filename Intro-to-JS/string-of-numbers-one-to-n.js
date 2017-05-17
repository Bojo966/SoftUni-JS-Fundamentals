function solve(inputNumber) {
    let actualNumber = Number(inputNumber)
    let totalString = ''
    for (let i = 0; i <= actualNumber; i++) {
        totalString += (String(i))
    }

    console.log(totalString)
}