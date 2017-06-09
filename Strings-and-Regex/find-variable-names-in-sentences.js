function findVariablesInSentence(sentence) {
    let pattern = /\b_[a-zA-Z0-9]+\b/g
    let matches = sentence.match(pattern)

    for (var index = 0; index < matches.length; index++) {
        matches[index] = matches[index].substr(1, matches[index].length - 1)
    }
    console.log(matches.join(','))
}

findVariablesInSentence('The _id and _age variables are both integers.')