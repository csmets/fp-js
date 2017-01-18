// Recursion
const countDown = (number) => {
	if (number >= 0) {
		console.log(number);
		return countDown(number - 1);
	}
	return number;
};

countDown(10);
