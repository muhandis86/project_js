function fib(n) {
	if (n <= 0 || typeof(n) != 'number' || n % 1 !== 0) {
		return '';
	} else {
    	let str = '', 
			arr = [];

		for (let i = 0; i < n; i++) {
			if (i !== 0) str += ' ';
			if (i <= 1) {
				arr[i] = i;
				str += arr[i];
			} else {
				arr[i] = arr[i - 1] + arr[i - 2];
				str += arr[i];
			}
		}
		return str;
	}
}
console.log(fib(10));