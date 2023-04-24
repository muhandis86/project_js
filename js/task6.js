// Место для первой задачи
function getTimeFromMinutes(x) {
	if (x < 0 || typeof(x) != 'number' || x % 1 !== 0) {
		return 'Ошибка, проверьте данные';
	} else {
		let hour = 0,
			min = 0,
			str = 'час';

		hour = Math.trunc(x / 60);
		min = x - hour * 60;

		if (hour === 0 || hour >= 5) str += 'ов'; 
		else if (hour >= 2 && hour <= 10) str += 'а';

		return `Это ${hour} ${str} и ${min} минут`;
	}
}
console.log(getTimeFromMinutes(60));

// Место для второй задачи
function findMaxNumber(a,b,c,d) {
	if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number' ) return 0;
	else return Math.max(a,b,c,d);
}
console.log(findMaxNumber(10,2.3,-3,400));