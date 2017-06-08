function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let x = input[2];
    let y = input[3];

    let dirs = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1]
    ];
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < rows; col++) {
            matrix[row][col] = null;
        }
    }

    let num = 1;
    matrix[x][y] = num;
    while (freeSpace(matrix, rows, cols)) {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (matrix[i][j] === num) {
                    for (var z = 0; z < dirs.length; z++) {
                        let dir = dirs[z];
                        let row = i + dir[0];
                        let col = j + dir[1];
                        if (row < 0 || row >= rows ||
                            col < 0 || col >= cols ||
                            matrix[row][col] !== null) {
                            continue;
                        }
                        matrix[row][col] = num + 1;
                    }
                }
            }
        }
        num++;
    }
    console.log(matrix.join("\r\n").replace(/,/g, " "));

    function freeSpace(matrix, rows, cols) {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (matrix[i][j] === null) {
                    return true;
                }
            }
        }
        return false;
    }
}