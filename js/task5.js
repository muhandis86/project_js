// Место для первой задачи
function calculateVolumeAndArea(l) {
	if (l <= 0 || typeof(l) != 'number' || l % 1 !== 0) {
		return 'При вычислении произошла ошибка';
	} else {
		const V = Math.pow(l,3),  
			  S = Math.pow(l,2)*6;
		return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
	}
}
console.log(calculateVolumeAndArea(5));

// Место для второй задачи
function getCoupeNumber(s) {
	if (s < 0 || typeof(s) != 'number' || s % 1 !== 0) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (s === 0 || s > 36) {
		return 'Таких мест в вагоне не существует';
	} else {
		const coupe = Math.ceil(s / 4);
		return coupe;
	}
}
console.log(getCoupeNumber(-23));