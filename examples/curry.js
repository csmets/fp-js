// Currying - string together a bunch of procedures you want to finally compile.
const bioText =
    name =>
        age =>
            job =>
                `${name} is ${age} years old and is a ${job}!`;

const message = bioText('Bob')('30')('Software Developer');

console.log(message);
