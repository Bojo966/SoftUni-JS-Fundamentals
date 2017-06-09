function matchAllWords(stringValue) {
    let regularExpression = /[a-zA-Z0-9_]+/g
    let words = String(stringValue).match(regularExpression)
    console.log(words.join('|'))
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')