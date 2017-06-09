function filterEmployeeData(inputStrings) {
    inputStrings.forEach(function(currentString) {
        let matches = /^([A-Z][a-zA-Z]*)+\s-\s([1-9]\d*)\s-\s(([a-zA-Z0-9-]+\s?)+)\b/g.exec(currentString)
        if (matches) {
            let name = matches[1]
            let salary = matches[2]
            let position = [matches[3]]

            console.log(`Name: ${name}`)
            console.log(`Position: ${position}`)
            console.log(`Salary: ${salary}`)
        }
    }, this);
}

filterEmployeeData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
])