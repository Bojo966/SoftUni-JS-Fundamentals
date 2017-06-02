function cookingByNumbers(input) {
    let chop = function(number) {
        return number / 2
    }

    let dice = function(number) {
        return Math.sqrt(number)
    }

    let spice = function(number) {
        return number + 1
    }

    let bake = function(number) {
        return number * 3
    }

    let fillet = function(number) {
        return number * 4 / 5
    }

    let number = Number(input[0])
    for (let commandIndex = 1; commandIndex < input.length; commandIndex++) {
        switch (input[commandIndex]) {
            case 'chop':
                number = chop(number)
                break
            case 'dice':
                number = dice(number)
                break
            case 'spice':
                number = spice(number)
                break
            case 'bake':
                number = bake(number)
                break
            case 'fillet':
                number = fillet(number)
                break
        }
        console.log(number)
    }
}