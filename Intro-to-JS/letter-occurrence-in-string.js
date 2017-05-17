function solve(word, letter) {
    let wordLenght = String(word).length;
    let numberOfOccurrences = 0;
    for (let letterIndex = 0; letterIndex < wordLenght; letterIndex++) {
        if (word[letterIndex] == letter) {
            numberOfOccurrences++;
        }
    }


}