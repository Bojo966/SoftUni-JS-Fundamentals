function biggestElement(input) {
    let biggestNumber = -Infinity
    input.forEach(function(innerArray) {
        innerArray.forEach(function(element) {
            if (Number(element) > biggestNumber)
                biggestNumber = element
        }, this);
    }, this);

    console.log(biggestNumber)
}