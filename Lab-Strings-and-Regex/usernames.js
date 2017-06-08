function formatUsernames(usernames) {
    let formattedUsernames = []
    usernames.forEach(function(element) {
        let indexOfAt = element.indexOf('@')
        let formattedUsername = element.substr(0, indexOfAt)
        formattedUsername += '.'
        formattedUsername += element[indexOfAt + 1]
        let indexOfDot = element.indexOf('.', indexOfAt)

        while (indexOfDot !== -1) {
            formattedUsername += element[indexOfDot + 1]
            indexOfDot = element.indexOf('.', indexOfDot + 1)
        }

        formattedUsernames.push(formattedUsername)
    }, this);

    console.log(formattedUsernames.join(', '))
}

formatUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])