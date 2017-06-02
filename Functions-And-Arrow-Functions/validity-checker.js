function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number)
    let distanceFromPointOneToCenter = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2))
    let distanceFromPointTwoToCenter = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2))
    let distanceFromPointOneToPointTwo = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    console.log(`{${x1}, ${y1}} to {0, 0} is ${distanceFromPointOneToCenter === parseInt(distanceFromPointOneToCenter) ? 'valid' : 'invalid'}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distanceFromPointTwoToCenter === parseInt(distanceFromPointTwoToCenter) ? 'valid' : 'invalid'}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceFromPointOneToPointTwo === parseInt(distanceFromPointOneToPointTwo) ? 'valid' : 'invalid'}`)
}