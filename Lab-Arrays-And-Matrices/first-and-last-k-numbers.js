function firstKNumber(input) {
    let k = Number(input[0])
    let outputOne = ''
    let outputTwo = ''
    for (let index = 1; index < 1 + k; index++) {
        outputOne += input[index] + ' '
    }

    for (let index = input.length - k; index < input.length; index++) {
        outputTwo += input[index] + ' '
    }

    console.log(outputOne)
    console.log(outputTwo)
}