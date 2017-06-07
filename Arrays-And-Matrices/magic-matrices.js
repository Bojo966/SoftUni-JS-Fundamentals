    function checkMatrixForMagic(input) {
        function getWantedSum(input) {
            let wantedSum = 0
            input[0].forEach(function(element) {
                wantedSum += element
            }, this);

            return wantedSum
        }

        function checkForColsMagic(input, wantedSum) {
            for (let col = 0; col < input[0].length; col++) {
                let currentCol = 0
                for (let row = 0; row < input.length; row++) {
                    let value = input[col][row]
                    currentCol += value
                }

                if (currentCol !== wantedSum) {
                    return false
                }
            }

            return true
        }

        function checkForRowsMagic(input, wantedSum) {
            input.forEach(function(element) {
                let currentRow = 0
                element.forEach(function(value) {
                    currentRow += value
                }, this);

                if (currentRow !== wantedSum) {
                    return false
                }
            }, this);

            return true
        }

        let wantedSum = getWantedSum(input)

        let areColsMagic = checkForColsMagic(input, wantedSum)
        let areRowsMagic = checkForRowsMagic(input, wantedSum)

        console.log(areColsMagic && areRowsMagic)
    }


    checkMatrixForMagic([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ])