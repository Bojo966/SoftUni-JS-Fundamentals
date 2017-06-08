function aggregateTable(table) {
    let newValues = []
    table.forEach(function(element) {
        newValues.push(element.split('|').filter(function(value, index, array) {
            if (value.trim() !== '') {
                return true
            }

            return false
        }))
    }, this);

    let sum = 0
    let towns = []

    newValues.forEach(function(element) {
        towns.push(element[0].trim())
        sum += Number(element[1].trim())
    }, this);

    console.log(towns.join(', '))
    console.log(sum)
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
])