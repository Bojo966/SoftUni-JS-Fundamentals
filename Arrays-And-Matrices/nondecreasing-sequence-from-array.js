function extractNonDecreasingSquence(input) {
    let currentBiggestElement = input[0]
    input.forEach(function(element) {
        if (currentBiggestElement <= element) {
            console.log(element)
            currentBiggestElement = element
        }
    }, this);
}

extractNonDecreasingSquence([2, 3, 5, 3, 10, 4])