// Currying - string together a bunch of procedures you want to finally compile.
let bioText =
    name =>
        age =>
            job =>
                name + ' is ' + age + ' years old and is a ' + job + '!'

let message = bioText('Bob')('30')('Software Developer')

console.log(message);
