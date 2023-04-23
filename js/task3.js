//---------------------------------------------------
//*
//**
//***
//****
//*****
//******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
// 	result += '*';
// 	console.log(result);
// }


//---------------------------------------------------
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';
let temp = '';
let k = 1;

for (let i = 1; i < 13; i++) {
	if (i % 2 === 0) {
		temp += '*';
        
	} else {
		for (let j = k; j <= lines; j++) {
			result += ' ';
		}
		temp += '*';
		result += temp;
	    result +='\n';
		k++;
	}
}
console.log(result);