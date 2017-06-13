function decodeMessages(inputStrings) {
    let keyWord = inputStrings[0].toLowerCase()
    let pattern = /\s+([A-Z\!\%\$\#]{8,})(\s|\.|\,|$)/g
    for (let index = 1; index < inputStrings.length; index++) {
        let currentString = inputStrings[index]
        let currentStringLowercase = currentString.toLowerCase()
        let currentIndexOfKeyword = -1
        while ((currentIndexOfKeyword = String(currentStringLowercase).indexOf(keyWord, currentIndexOfKeyword + 1)) !== -1) {
            if (currentString[currentIndexOfKeyword + keyWord.length] !== ' ') {
                continue
            }

            let currentSubstring = currentString.substr(currentIndexOfKeyword + keyWord.length)
            let match = pattern.exec(currentSubstring)
            if (match) {
                let currentWord = match[1]
                let modifiedWord = currentWord
                while (modifiedWord.indexOf('!') !== -1)
                    modifiedWord = modifiedWord.replace('!', 1)

                while (modifiedWord.indexOf('%') !== -1)
                    modifiedWord = modifiedWord.replace('%', 2)

                while (modifiedWord.indexOf('#') !== -1)
                    modifiedWord = modifiedWord.replace('#', 3)

                while (modifiedWord.indexOf('$') !== -1)
                    modifiedWord = modifiedWord.replace('$', 4)

                modifiedWord = modifiedWord.toLocaleLowerCase()

                currentString = currentString.replace(currentWord, modifiedWord)
            }
        }

        console.log(currentString)
    }
}
decodeMessages(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY GOSHO are!'
])