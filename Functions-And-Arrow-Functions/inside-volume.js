function insideVolume(input) {
    let elements = input.map(Number)
    let isInside = function(x, y, z) {
        let x1 = 10,
            x2 = 50
        let y1 = 20,
            y2 = 80
        let z1 = 15,
            z2 = 50
        if (x < x1 || x > x2) {
            return false
        }

        if (y < y1 || y > y2) {
            return false
        }

        if (z < z1 || z > z2) {
            return false
        }

        return true
    }
    for (let counter = 0; counter < elements.length; counter += 3) {
        let x = elements[counter]
        let y = elements[counter + 1]
        let z = elements[counter + 2]
        if (isInside(x, y, z)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
    }
}