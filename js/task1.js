
function firstTask() {    
	for (let i = 5; i < 11; i++){
		console.log(i);
	}
}
firstTask();

function secondTask() {    
	for (let i = 20; i > 9; i--) {
		if (i == 13) break;
		console.log(i);
	}
}
secondTask();

function thirdTask() {
	for (let i = 2; i < 11; i++) {
		if (i % 2 === 0) console.log(i);
	}
}
thirdTask();


function fourthTask() {
	let i = 1;
	while (++i <= 16) {
		if (i % 2 === 0) {
			continue;
		} else {
			console.log(i);
		}
	}  
}
fourthTask();


function fifthTask() {
	const arrayOfNumbers = [];
	for (let i = 0; i <= 5; i++) {
		arrayOfNumbers[i] = i + 5;
	}
	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}
fifthTask();
