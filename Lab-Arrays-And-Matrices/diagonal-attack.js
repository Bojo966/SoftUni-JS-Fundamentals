function checkForDiagonalAttack(matrixInput) {
    let leftDiagonalSum = 0;
    let rightDiagonalSUm = 0;

    let matrix = []
    matrixInput.forEach(function(element) {
        matrix.push(String(element).split(' ').map(Number))
    }, this);

    let diagonalsMap = []
    let numberOfRows = matrix.length
    let numberOfCols = matrix[0].length

    for (var row = 0; row < numberOfRows; row++) {
        diagonalsMap.push([])
        for (var col = 0; col < numberOfCols; col++) {
            diagonalsMap[row].push(0)
        }
    }

    let leftDiagonalRow = 0;
    let leftDiagonalCol = 0;
    let rightDiagonalRow = 0;
    let rightDiagonalCol = matrix[1].length - 1

    let leftDiagonalIndexValid = (leftDiagonalCol <= matrix[1].length - 1) && (leftDiagonalRow <= matrix.length - 1)
    let rightDiagonalIndexValid = (rightDiagonalCol >= 0) && (rightDiagonalRow <= matrix.length - 1)

    while (leftDiagonalIndexValid && rightDiagonalIndexValid) {
        leftDiagonalSum += Number(matrix[leftDiagonalRow][leftDiagonalCol])
        rightDiagonalSUm += Number(matrix[rightDiagonalRow][rightDiagonalCol])

        diagonalsMap[leftDiagonalRow][leftDiagonalCol] = 1
        diagonalsMap[rightDiagonalRow][rightDiagonalCol] = 1

        leftDiagonalCol++
        leftDiagonalRow++
        rightDiagonalCol--
        rightDiagonalRow++

        leftDiagonalIndexValid = (leftDiagonalCol <= matrix[1].length - 1) && (leftDiagonalRow <= matrix.length - 1)
        rightDiagonalIndexValid = (rightDiagonalCol >= 0) && (rightDiagonalRow <= matrix.length - 1)
    }

    if (leftDiagonalSum === rightDiagonalSUm) {
        for (let row = 0; row < numberOfRows; row++) {
            for (let col = 0; col < numberOfCols; col++) {
                if (diagonalsMap[row][col] === 0) {
                    matrix[row][col] = leftDiagonalSum
                }
            }
        }
    }

    let output = ''
    matrix.forEach(function(row) {
        output = ''
        row.forEach(function(element) {
            output += element + ' '
        }, this);
        console.log(output)
    }, this);
}

checkForDiagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])