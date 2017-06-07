function rotateArray(inputArray) {
    let numberOfRotations = inputArray[inputArray.length - 1]
    inputArray.pop()
    numberOfRotations %= inputArray.length

    for (var index = 0; index < numberOfRotations; index++) {
        let temp = inputArray.pop()
        inputArray.unshift(temp)
    }

    let output = ''
    for (let i in inputArray) {
        output += `${inputArray[i]} `
    }

    console.log(output)
}