function countOccurances(keyword, text) {

    let currentIndex = -1
    let counter = 0;
    while (currentIndex < text.length) {
        currentIndex = String(text).indexOf(keyword, currentIndex + 1)
        if (currentIndex === -1) {
            break
        }

        counter++
    }
    console.log(counter)
}