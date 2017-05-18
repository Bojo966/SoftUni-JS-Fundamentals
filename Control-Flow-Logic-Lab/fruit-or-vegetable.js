function fruidOrVeggie(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach']
    let veggies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']

    if (fruits.indexOf(input) !== -1) {
        console.log('fruit')
    } else if (veggies.indexOf(input) !== -1) {
        console.log('vegetable')
    } else {
        console.log('unknown')
    }
}