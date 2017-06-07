function printNthElements(input) {
    let n = input[input.length - 1]
    input.pop()

    for (let i = 0; i < input.length; i++) {
        if (i % n === 0) {
            console.log(input[i])
        }
    }
}