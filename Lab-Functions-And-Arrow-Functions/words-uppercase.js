function capitalize(sentence) {
    let rgx = /\w+/g
    let matches = sentence.match(rgx)
    let output = ''
    matches.forEach(function(element) {
        output += element.toUpperCase() + ', '
    }, this);
    output = output.substr(0, output.length - 2)
    console.log(output)
}

capitalize('Hi, how are you?')