const someString = 'This is some strange string';

function reverse(str) {
	if (typeof(str) !== 'string') {
		return 'Ошибка!';
	} else {
		str = str.split('').reverse().join('');
	    return str;
	}
}
console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const arr = baseCurrencies.concat(additionalCurrencies);
console.log(arr);

function availableCurr(arr, missingCurr) {
	let str = 'Доступные валюты:\n';
	if (arr.length === 0) {
		return 'Нет доступных валют';
	} else {
		arr.forEach(element => {
			if (element !== missingCurr) {
				str += `${element}\n`;
			}
		});
		return str;
	}
};

console.log(availableCurr(arr, 'RUB'));
