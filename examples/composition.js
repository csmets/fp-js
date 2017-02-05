/* 
 * Composition allows you to string a bunch of functions which will execute
 * from left to right.
 */

// Steal this function to use in your projects.
const compose = (...funcs) => (...args) => {
    const loop = (i, res) => {
        if (i > 0) {
            const count = i - 1;
            return loop(count, [funcs[count].apply(this, res)]);
        }
        return res;
    };
    return loop(funcs.length, args)[0];
};

const toUpperCase = x => x.toUpperCase();

const exclaim = x => `${x}!`;

const duplicate = x => `${x} ${x}`;

const shout = compose(toUpperCase, exclaim, duplicate);

console.log(shout('hello'));
