function fruidOrVeggie(numberOfElements) {
    let color = ''
    console.log('<ul>')
    for (var i = 1; i <= Number(numberOfElements); i++) {
        if (i % 2 === 0) {
            color = 'blue'
        } else {
            color = 'green'
        }
        var output = "<li><span style='color:" + color + "'>" + i + '</span></li>'
        console.log(output)
    }

    console.log('</ul>')
}