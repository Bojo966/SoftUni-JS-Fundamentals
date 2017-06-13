function decodeMatrix(inputStrings) {
    let n = Number(inputStrings[0])
    let decodingTemplateMatrix = []
    for (var lineIndex = 1; lineIndex < 1 + n; lineIndex++) {
        decodingTemplateMatrix.push(inputStrings[lineIndex].split(' ').map(Number))
    }

    let encodedMatrix = []
    for (var lineIndex = 1 + n; lineIndex < inputStrings.length; lineIndex++) {
        encodedMatrix.push(inputStrings[lineIndex].split(' ').map(Number))
    }

    let decodedMatrix = []
    encodedMatrix.forEach(function(element) {
        decodedMatrix.push([])
    }, this);

    for (var rowInEncodedMatrix = 0; rowInEncodedMatrix < encodedMatrix.length; rowInEncodedMatrix += decodingTemplateMatrix.length) {
        for (var colInEncodedMatrix = 0; colInEncodedMatrix < encodedMatrix[0].length; colInEncodedMatrix += decodingTemplateMatrix[0].length) {
            for (var rowInDecodingMatrix = 0; rowInDecodingMatrix < decodingTemplateMatrix.length; rowInDecodingMatrix++) {
                for (var colInDecodingMatrix = 0; colInDecodingMatrix < decodingTemplateMatrix[0].length; colInDecodingMatrix++) {
                    let wantedRowInEncodedMatrix = rowInEncodedMatrix + rowInDecodingMatrix
                    let wantedColInEncodedMatrix = colInDecodingMatrix + colInEncodedMatrix

                    if (wantedRowInEncodedMatrix < encodedMatrix.length && wantedColInEncodedMatrix < encodedMatrix[0].length) {
                        let currentNumber = encodedMatrix[wantedRowInEncodedMatrix][wantedColInEncodedMatrix] + decodingTemplateMatrix[rowInDecodingMatrix][colInDecodingMatrix]
                        currentNumber %= 27
                        if (currentNumber === 0) {
                            decodedMatrix[wantedRowInEncodedMatrix].push(' ')
                        } else {
                            decodedMatrix[wantedRowInEncodedMatrix].push(String.fromCharCode(currentNumber + 64))
                        }
                    }
                }
            }
        }
    }
    let output = ''
    decodedMatrix.forEach(function(line) {
        line.forEach(function(letter) {
            output += letter
        }, this);
    }, this);

    console.log(output)
}

decodeMatrix(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
])