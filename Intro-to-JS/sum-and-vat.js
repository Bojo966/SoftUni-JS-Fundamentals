function solve(input) {
    let inputLenght = input.length;
    let sum = 0;

    for (let i = 0; i < inputLenght; i++) {
        let currentNumber = Number(input[i]);
        sum += currentNumber
    }

    let vat = sum * 0.2;
    let total = vat + sum;
    console.log('sum = ' + sum)
    console.log('VAT = ' + vat)
    console.log('total = ' + total)
}

solve([1.20, 2.60, 3.50])