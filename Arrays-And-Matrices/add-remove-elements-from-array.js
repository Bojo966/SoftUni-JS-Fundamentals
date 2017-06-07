function interpredCommands(input) {
    let initialValue = 1

    let valuesArray = [1]
    for (var index = 1; index < input.length; index++) {
        var element = input[index]
        initialValue++
        if (element === 'add') {
            valuesArray.push(initialValue)
        } else if (element === 'remove') {
            valuesArray.pop()
        }
    }

    if (valuesArray.length === 0) {
        console.log('Empty')
    } else {
        for (let i in valuesArray) {
            console.log(valuesArray[i])
        }
    }
}