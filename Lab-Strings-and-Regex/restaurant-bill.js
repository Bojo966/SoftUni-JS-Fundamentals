function calculateRestaurantBill(bill) {
    let sum = 0
    let products = []

    for (var index = 0; index < bill.length; index++) {
        if (index % 2 == 0) {
            products.push(bill[index])
        } else {
            sum += Number(bill[index])
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)
}