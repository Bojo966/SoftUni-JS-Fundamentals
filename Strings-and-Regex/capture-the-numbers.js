function captureTheNubers(inputStrings) {
    let numbers = []
    let pattern = /\d+/g
    inputStrings.forEach(function(currentString) {
        let matches = String(currentString).match(pattern)
        if (matches) {
            matches.forEach(function(match) {
                numbers.push(match)
            }, this)
        }
    }, this);

    console.log(numbers.join(' '))
}

captureTheNubers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
])