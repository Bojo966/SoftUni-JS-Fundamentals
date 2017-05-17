function distanceCalc(x1, y1, x2, y2) {
    x1 = Number(x1)
    x2 = Number(x2)
    y1 = Number(y1)
    y2 = Number(y2)

    let result = Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2))
    return result
}