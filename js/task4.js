// Место для первой задачи
function sayHello(name) {
	return `"Привет, ${name}!"`;
}
sayHello('Zaur');

// Место для второй задачи
function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}
returnNeighboringNumbers(10);

// Место для третьей задачи
function getMathResult(a, b) {
	let str = '';
	let summ = a;
	if (typeof(b) != 'number' || b === 0 || b < 0) {
		return a;
	} else {
		str += a;
		for (let i = 1; i < b; i++) {
			summ = summ + a;
			str += `---${summ}`;
		}
		return str;
	}
}
console.log(getMathResult(3, 10));
