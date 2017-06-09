function htmlEscape(input) {
    let mapping = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'

    }

    function escapeString(element) {
        for (var key in mapping) {
            if (mapping.hasOwnProperty(key)) {
                var escapedValue = mapping[key];
                while (String(element).indexOf(key) !== -1) {
                    element = String(element).replace(key, escapedValue)
                }
            }
        }

        return element
    }

    console.log('<ul>')
    input.forEach(function(element) {
        element = escapeString(element)
        console.log(`    <li>${element}</li>`)
    }, this);
    console.log('</ul>')

}

htmlEscape(['<b>unescaped text</b>', 'normal text'])