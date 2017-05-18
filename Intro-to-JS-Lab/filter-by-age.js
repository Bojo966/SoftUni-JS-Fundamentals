function solve(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {
        'name': firstPersonName,
        'age': firstPersonAge
    }

    let secondPerson = {
        'name': secondPersonName,
        'age': secondPersonAge
    }

    if (minimumAge <= firstPersonAge)
        console.log(firstPerson)

    if (minimumAge <= secondPersonAge)
        console.log(secondPerson)
}