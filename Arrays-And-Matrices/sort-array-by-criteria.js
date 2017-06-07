function sortArrayByTwoCriteria(input) {
    input.sort((a, b) => {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            return String(a).localeCompare(b)
        }
    })

    input.forEach(function(element) {
        console.log(element)
    }, this);
}

sortArrayByTwoCriteria(['aplha', 'beta', 'gamma'])