function primeNumber(number) {
    var isPrime = true
    if (number >= 2) {
        for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
    } else {
        isPrime = false
    }

    console.log(isPrime)
}