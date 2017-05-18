function boxesAndBottles(numberOfBottles, numberOfBottlesInABox) {
    numberOfBottles = Number.parseInt(numberOfBottles)
    numberOfBottlesInABox = Number.parseInt(numberOfBottlesInABox)
    var numberOfBoxesNeeded = Math.floor(numberOfBottles / numberOfBottlesInABox)
    numberOfBoxesNeeded += (numberOfBottles % numberOfBottlesInABox === 0 ? 0 : 1)
    return numberOfBoxesNeeded
}