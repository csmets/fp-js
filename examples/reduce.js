const tests = require('./testObjects')

// Reduce - add or subtract
let totalAmount = tests.orders.reduce((sum, order) => sum + order.amount, 0)
console.log("Total about: ", totalAmount);
