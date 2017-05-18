function oddOrEven(number) {
    if (Number(number) !== Math.floor(number)) {
        console.log('invalid')
    } else if (number % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}