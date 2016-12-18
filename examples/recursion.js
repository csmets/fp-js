// Recursion
let countDown = (number) => {
    if (number >= 0) {
        console.log(number)
        return countDown(number - 1)
    }
}

countDown(10)
