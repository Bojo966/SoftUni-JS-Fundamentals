function chessboard(n) {
    var className = ''
    if (n % 2 === 0) {
        className = 'black'
    } else {
        className = 'black'
    }
    console.log('<div class="chessboard">')
    let colorNumber = 0
    for (var row = 0; row < n; row++) {
        console.log('  <div>')
        for (var col = 0; col < n; col++) {
            if ((colorNumber = col % 2 + row % 2) % 2 === 0) {
                className = 'black'
            } else {
                className = 'white'
            }
            console.log('    <span class="' + className + '"></span>')
        }
        console.log('  </div>')
    }
    console.log('</div>')
}