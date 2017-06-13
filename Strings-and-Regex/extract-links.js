function extractLinks(inputStrings) {
    let pattern = /www\.([a-zA-Z0-9-]+)((\.[a-z]+){1,})/g
    inputStrings.forEach(function(currentString) {
        let matches = currentString.match(pattern)
        if (matches) {
            matches.forEach(function(match) {
                console.log(match)
            }, this);

        }
    }, this);
}

extractLinks(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
])