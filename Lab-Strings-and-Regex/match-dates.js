function matchTheDates(inputStrings) {
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})/g
    inputStrings.forEach(function(element) {
        let matches = undefined
        while (matches = pattern.exec(element)) {
            console.log(`${matches[0]} (Day: ${matches[1]}, Month: ${matches[2]}, Year: ${matches[3]})`)
        }
    }, this);
}

matchTheDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.'
])