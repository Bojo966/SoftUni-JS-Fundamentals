function splitExpression(expression) {
    let pattern = /([^(,'\.\s();)]+)/g
    let result = undefined
    while (result = pattern.exec(expression)) {
        console.log(result[1])
    }
}

splitExpression('\'let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}\'')