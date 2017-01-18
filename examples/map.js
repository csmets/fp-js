const tests = require('./testObjects');

// Map - rebuilding new arrays
const species = tests.animals.map(animal =>
	`${animal.species} is a ${animal.race}`);

console.log('What species is the animal? \n', JSON.stringify(species, null, 2));

const names = Object.keys(tests.nestedObjects).map((key) => {
	const result =	{
		name: tests.nestedObjects[key].name,
	};
	return result;
});

console.log('Converting a bunch of objects to an array of objects: \n',
	JSON.stringify(names, null, 2));
