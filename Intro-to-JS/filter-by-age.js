function solve(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    firstPerson = {
        'name': firstPersonName,
        'age': firstPersonAge
    }

    secondPerson = {
        'name': secondPersonName,
        'age': secondPersonAge
    }

    if (minimumAge < firstPersonAge)
        console.log(firstPerson)

    if (minimumAge < secondPersonAge)
        console.log(secondPerson)
}