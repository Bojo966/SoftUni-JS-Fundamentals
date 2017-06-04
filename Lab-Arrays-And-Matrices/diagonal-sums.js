function calculateDiagonalSums(matrix) {
    let leftDiagonalIndex = 0
    let leftDiagonalSum = 0
    let rightDiagonalIndex = matrix.length - 1
    let rightDiagonalSum = 0
    matrix.forEach(function(row) {
        row.forEach(function(element, index) {
            if (index === leftDiagonalIndex) {
                leftDiagonalSum += element
            }

            if (index === rightDiagonalIndex) {
                rightDiagonalSum += element
            }
        })
        leftDiagonalIndex++
        rightDiagonalIndex--
    }, this);

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`)
}