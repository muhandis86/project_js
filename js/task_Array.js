const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length === 0) {
		return 'Семья пуста';
	} else {
		return `Семья состоит из: ${arr.join(' ')}`;
	}
}
console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	for (let value of arr) {
		console.log(value.toLowerCase());
	}
}
standardizeStrings(favoriteCities);