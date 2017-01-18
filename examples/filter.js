const tests = require('./testObjects');

// Filter - Allows to return only the elements you want
const mammals = tests.animals.filter(animal => animal.race === 'mammal');

console.log('List of mammals: \n', JSON.stringify(mammals, null, 2));
