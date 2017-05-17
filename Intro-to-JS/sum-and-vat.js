function solve(input) {
    let inputLenght = input.length;
    let sum = 0;

    for (let i = 0; i < inputLenght; i++) {
        let currentNumber = Number(input[i]);
        sum += currentNumber
    }

    let vat = sum * 0.2;
    let total = sum * 1.2;
    console.log('sum = ' + sum)
    console.log('VAT = ' + vat)
    console.log('total = ' + total)
}