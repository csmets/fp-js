/*
 * Memoization in Javascript
 * Useful for function caching for speed/optization. Why recaculate something
 * if it's already been done before :)
*/

// Powering a number by 900, if a number has already been calculated just use
// the cached value.
const powTo900 = (num) => {
	// Check if cache object already exists otherwise create it
	powTo900.cache = powTo900.cache || {}

	// Check if it's already been calculated and stored in cache if not exec
	if (!powTo900.cache[num]) {
		// Expensive operation here...
		const result = Math.pow(num, 900)
		powTo900.cache[num] = result // store the result so we can reuse it
	}

	return powTo900.cache[num]
}

// First time calling this function
console.log(powTo900(2))

// Second time will grab the cached value
console.log(powTo900(2))
