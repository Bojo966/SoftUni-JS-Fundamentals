function radioCristals(input) {


    function cut(value) {
        return value / 4
    }

    function lap(value) {
        return value * 0.8
    }

    function grind(value) {
        return value - 20
    }

    function etch(value) {
        return value - 2
    }

    function xRay(value) {
        return value + 1
    }

    function transportingAndWashing(value) {
        return Math.floor(value)
    }

    let desiredValue = input[0]
    for (var index = 1; index < input.length; index++) {
        var initialValue = input[index];

        console.log(`Processing chunk ${initialValue} microns`)
        let cutCount = 0
        let lapCount = 0
        let grindCount = 0
        let etchCount = 0

        while (cut(initialValue) >= desiredValue) {
            initialValue = cut(initialValue)
            cutCount++
        }

        if (cutCount) {
            console.log(`Cut x${cutCount}`)
            console.log('Transporting and washing')
            initialValue = transportingAndWashing(initialValue)
        }

        while (lap(initialValue) >= desiredValue) {
            initialValue = lap(initialValue)
            lapCount++
        }

        if (lapCount) {
            console.log(`Lap x${lapCount}`)
            console.log('Transporting and washing')
            initialValue = transportingAndWashing(initialValue)
        }

        while (grind(initialValue) >= desiredValue) {
            initialValue = grind(initialValue)
            grindCount++
        }

        if (grindCount) {
            console.log(`Grind x${grindCount}`)
            console.log('Transporting and washing')
            initialValue = transportingAndWashing(initialValue)
        }

        while (etch(initialValue) >= desiredValue) {
            initialValue = etch(initialValue)
            etchCount++
        }

        if (etchCount) {
            console.log(`Etch x${etchCount}`)
            console.log('Transporting and washing')
            initialValue = transportingAndWashing(initialValue)
        }

        if (xRay(initialValue) === desiredValue) {
            initialValue = xRay(initialValue)
            console.log(`X-ray x${1}`)
        }

        console.log(`Finished crystal ${desiredValue} microns`)
    }
}