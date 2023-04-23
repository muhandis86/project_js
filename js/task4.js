// Место для первой задачи
function sayHello(name) {
	let message = `"Привет, ${name}!"`;
	console.log(message);
	return message; 
}
sayHello('Zaur');

// Место для второй задачи
function returnNeighboringNumbers(num) {
	let arr = [];
	arr[0] = num - 1;
	arr[1] = num;
	arr[2] = num + 1; 
	console.log(arr);
	return arr;
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
