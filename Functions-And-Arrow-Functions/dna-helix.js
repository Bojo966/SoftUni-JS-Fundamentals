function drawDna(size) {
    let combinations = ['AT', 'CG', 'TT', 'AG', 'GG']

    let currentSide = 0
    let currentDashesOnRow = 0
    let currentSumatorForDashes = 2;

    while (currentSide < size) {
        let currentStarsOnSide = (6 - 2 - currentDashesOnRow) / 2
        let starsOnSideString = '*'.repeat(currentStarsOnSide)
        let currentCombination = combinations[currentSide % 5]
        let dashesOnSideString = '-'.repeat(currentDashesOnRow)
        console.log(`${starsOnSideString}${currentCombination[0]}${dashesOnSideString}${currentCombination[1]}${starsOnSideString}`)
        currentSide++

        currentDashesOnRow += currentSumatorForDashes

        if (currentDashesOnRow == 4 || currentDashesOnRow == 0) {
            currentSumatorForDashes *= -1
        }

    }
}