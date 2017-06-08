function extractText(inputString) {
    inputString = String(inputString)
    let indexOfEndParenthesis = 0
    let extractedStrings = []
    let indexOfBeginningParenthesis = inputString.indexOf('(', indexOfEndParenthesis)
    while (indexOfBeginningParenthesis !== -1 && indexOfEndParenthesis !== -1) {
        indexOfEndParenthesis = inputString.indexOf(')', indexOfBeginningParenthesis)
        let substring = inputString.substr(indexOfBeginningParenthesis + 1, indexOfEndParenthesis - indexOfBeginningParenthesis - 1)
        extractedStrings.push(substring)
        indexOfBeginningParenthesis = inputString.indexOf('(', indexOfEndParenthesis)
    }

    console.log(extractedStrings.join(', '))
}