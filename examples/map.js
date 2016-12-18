const tests = require('./testObjects')

// Map - rebuilding new arrays
let species = tests.animals.map((animal) => animal.species + ' is a ' + animal.race)
console.log("What species is the animal? \n", JSON.stringify(species, null, 2))

let names = Object.keys(tests.nestedObjects).map((key) => {
    return {name: tests.nestedObjects[key].name}
})
console.log("Converting a bunch of objects to an array of objects: \n",
    JSON.stringify(names, null, 2))
