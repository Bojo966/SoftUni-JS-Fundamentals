function processOddNumbers(input) {
    console.log(input.map(Number).filter((x, index) => index % 2 === 1).map(y => y * 2).reverse().join(' '))
}