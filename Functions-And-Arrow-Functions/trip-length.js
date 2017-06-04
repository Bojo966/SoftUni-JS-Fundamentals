function calculateTripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number)
    let distanceBetweenPoint1And2 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
    let distanceBetweenPoint2And3 = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2))
    let distanceBetweenPoint1And3 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2))

    let shortestDistance = Math.min(distanceBetweenPoint1And2 + distanceBetweenPoint1And3, distanceBetweenPoint1And2 + distanceBetweenPoint2And3, distanceBetweenPoint1And3 + distanceBetweenPoint2And3)

    if (shortestDistance == distanceBetweenPoint1And2 + distanceBetweenPoint2And3)
        console.log(`1->2->3: ${shortestDistance}`)
    else if (shortestDistance == distanceBetweenPoint1And2 + distanceBetweenPoint1And3)
        console.log(`2->1->3: ${shortestDistance}`)
    else if (shortestDistance == distanceBetweenPoint1And3 + distanceBetweenPoint2And3)
        console.log(`1->3->2: ${shortestDistance}`)

}

calculateTripLength([0, 0, 2, 0, 4, 0])