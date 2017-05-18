function triangleArea(sideA, sideB, sideC) {
    sideA = Number(sideA)
    sideB = Number(sideB)
    sideC = Number(sideC)
    var perimeter = sideA + sideB + sideC
    var halfPerimeter = perimeter / 2
    var area = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC))
    console.log(area)
}