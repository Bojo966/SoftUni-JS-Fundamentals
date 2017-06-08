function printSpiralMatrix(numberOfRows, numberOfCols) {
    let matrix = []

    for (var index = 0; index < numberOfCols; index++) {
        matrix.push([])

    }
    let topRow = 0;
    let bottomRow = numberOfRows - 1;
    let leftCol = 0;
    let rightCol = numberOfCols - 1;
    let currentValue = 1;
    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (var col = leftCol; col <= rightCol; col++) {
            matrix[topRow][col] = currentValue
            currentValue++
        }

        topRow++

        for (var row = topRow; row <= bottomRow; row++) {
            matrix[row][rightCol] = currentValue
            currentValue++
        }

        rightCol--

        for (var col = rightCol; col >= leftCol; col--) {
            matrix[bottomRow][col] = currentValue
            currentValue++
        }

        bottomRow--

        for (var row = bottomRow; row >= topRow; row--) {
            matrix[row][leftCol] = currentValue
            currentValue++
        }

        leftCol++


    }

    matrix.forEach(function(row) {
        let outputLine = ''
        row.forEach(function(element) {
            outputLine += element + ' '
        }, this);
        console.log(outputLine.substr(0, outputLine.length - 1))
    }, this);

}

printSpiralMatrix([3, 3])