function aggregateElements(input) {
    let aggregate = function(elements, initialValue, funcToApply) {
        for (let counter = 0; counter < elements.length; counter++) {
            initialValue = funcToApply(initialValue, elements[counter])
        }
        return initialValue
    }

    let elements = input.map(Number)
    console.log(aggregate(elements, 0, (a, b) => a + b))
    console.log(aggregate(elements, 0, (a, b) => a + 1 / b))
    console.log(aggregate(elements, '', (a, b) => a + b))
}