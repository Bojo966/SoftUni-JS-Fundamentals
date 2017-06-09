function countWordOccurencesInSentence(sentence, word) {
    sentence = String(sentence).toLowerCase()
    word = String(word).toLowerCase()
    let patternString = '\\b' + `${word}` + '\\b'
    let pattern = new RegExp(patternString, 'g')

    let matches = String(sentence).match(pattern)
    if (!matches) {
        console.log(0)
    } else {
        console.log(matches.length)
    }
}

countWordOccurencesInSentence('The waterfall was so high, that the child couldn’t see its peak.',
    'the')