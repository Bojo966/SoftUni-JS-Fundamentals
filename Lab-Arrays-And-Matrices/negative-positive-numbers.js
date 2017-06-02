function negativePositiveNumber(input) {
    let result = []
    for (let i of input) {
        let number = Number(i)

        if (number < 0) {
            result.unshift(number)
        } else {
            result.push(number)
        }
    }

    for (let i of result) {
        console.log(i)
    }
}