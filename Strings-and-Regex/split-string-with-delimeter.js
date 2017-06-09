function splitString(inputString, delimeter) {
    let elementsOfStringSplit = String(inputString).split(delimeter)

    elementsOfStringSplit.forEach(function(element) {
        console.log(element)
    }, this);
}