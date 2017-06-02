function calculateDiagonalSums(matrix) {
    let leftDiagonalIndex = 0
    let leftDiagonalSum = 0
    let rightDiagonalIndex = matrix.length - 1
    let rightDiagonalSum = 0
    matrix.forEach(function(row) {
        row.forEach(function(element, index) {
            if (index === leftDiagonalIndex) {
                leftDiagonalSum += element
                leftDiagonalIndex++
            }

            if (index === rightDiagonalIndex) {
                rightDiagonalIndex++
                rightDiagonalSum += element
            }
        })
    }, this);

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`)
}