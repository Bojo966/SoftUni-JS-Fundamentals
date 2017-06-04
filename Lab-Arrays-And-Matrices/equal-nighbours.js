function printEqualNeighbors(matrix) {
    function fieldExists(col, row, matrixRows, matrixCols) {
        if (col < 0 || row < 0) {
            return false
        } else if (col >= matrixCols || row >= matrixRows) {
            return false
        } else {
            return true
        }
    }

    matrixRows = matrix.length
    matrixCols = matrix[0].length

    let rowsSumators = [0, -1, 0, 1]
    let colsSumators = [-1, 0, 1, 0]
    let pairs = 0

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let col = 0; col < currentRow.length; col++) {
            let currentElement = currentRow[col];

            for (var sumatorIndex = 0; sumatorIndex < rowsSumators.length; sumatorIndex++) {
                let sumatorCol = col + colsSumators[sumatorIndex]
                let sumatorRow = row + rowsSumators[sumatorIndex]
                if (fieldExists(sumatorCol, sumatorRow, matrixRows, matrixCols)) {
                    if (currentElement === matrix[sumatorRow][sumatorCol]) {
                        pairs++
                    }
                }
            }

        }
    }
    console.log(pairs / 2)
}