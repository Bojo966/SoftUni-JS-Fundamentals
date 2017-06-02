function templateFormat(input) {
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n'
    result += '<quiz>\n'
    for (let questions = 0; questions < input.length; questions += 2) {
        result += '  <question>\n'
        result += `    ${input[questions]}\n`
        result += '  </question>\n'
        result += '  <answer>\n'
        result += `    ${input[questions + 1]}\n`
        result += '  </answer>\n'
    }
    result += '</quiz>'
    console.log(result)
}