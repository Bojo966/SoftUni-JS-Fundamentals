function applyCensorship(text, forbiddenWords) {
    forbiddenWords.forEach(function(word) {
        let wordLen = word.length
        while (text.indexOf(word) !== -1) {
            text = String(text).replace(word, '-'.repeat(wordLen))
        }
    }, this);

    console.log(text)
}

applyCensorship('roses are red, violets are blue', [', violets are', 'red'])