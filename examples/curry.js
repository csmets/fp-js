// Currying - string together a bunch of procedures you want to finally compile.
const bioText =
	name =>
		age =>
			job =>
				`${name} is ${age} years old and is a ${job}!`;

const message = bioText('Bob')('30')('Software Developer');

console.log(message);

// Reusable curry function to use in projects
const curry = (fx) => {
	const arity = fx.length;

	return function f1() {
		const args = Array.prototype.slice.call(arguments, 0);
		if (args.length >= arity) {
			return fx.apply(null, args);
		}

		return () => {
			const args2 = Array.prototype.slice.call(arguments, 0);
			return f1.apply(null, args.concat(args2));
		};
	};
};

const sentence = curry((w, x, y, z) => w + x + y + z);

console.log(sentence('Hello ', 'how ', 'are ', 'you?'));
