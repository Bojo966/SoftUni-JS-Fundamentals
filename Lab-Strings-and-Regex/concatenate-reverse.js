function concatenateReversed(input) {
    input.reverse()
    let output = ''
    input.forEach(function(element) {
        for (var index = element.length - 1; index >= 0; index--) {
            var symbol = element[index];
            output += symbol
        }
    }, this);

    console.log(output)
}

concatenateReversed(['I', 'am', 'student'])