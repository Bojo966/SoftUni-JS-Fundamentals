function calculateTripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number)
    let firstDistance = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))
    let secondDistance = Math.sqrt(Math.pow(Math.abs(x2 - x3), 2) + Math.pow(Math.abs(y2 - y3), 2))
    let thirdDistance = Math.sqrt(Math.pow(Math.abs(x3 - x1), 2) + Math.pow(Math.abs(y3 - y1), 2))

    let distances = [{
        'point': 1,
        'distance': firstDistance
    }, {
        'point': 2,
        'distance': secondDistance
    }, {
        'point': 3,
        'distance': thirdDistance
    }]

    distances = distances.sort((a, b) => {
        if (a.distance > b.distance) {
            return -1
        } else {
            return 1
        }
    })

    let distancesSum = 0
    let output = ''
    distances.forEach(function(element) {
        distancesSum += element.distance
        output += element.point + '->'
    }, this)

    distancesSum -= distances[0].distance
    output = output.substring(0, output.length - 2) + ': ' + distancesSum
    console.log(output)
}

calculateTripLength([0, 0, 2, 0, 4, 0])