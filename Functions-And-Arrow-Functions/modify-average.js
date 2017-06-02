function modifyAverage(stringNumber) {
    stringNumber = String(stringNumber)
    let getAverageOfDigits = function(stringNumber) {
        let sum = 0
        for (let index = 0; index < stringNumber.length; index++) {
            sum += Number(stringNumber[index])
        }

        return sum / stringNumber.length
    }

    while (getAverageOfDigits(stringNumber) <= 5) {
        stringNumber += '9'
    }

    console.log(stringNumber)
}