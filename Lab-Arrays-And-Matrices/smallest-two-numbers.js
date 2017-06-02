function smallesTwoNumbers(input) {
    console.log(input.map(Number).sort((a, b) => a - b).slice(0, 2).join(' '))
}