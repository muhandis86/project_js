const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(obj) {
		return `Мне ${obj.age} и я владею языками: ${obj.skills['languages'].join(' ').toUpperCase()}`;
	}
};

function showExperience(plan) {
	let {name, age, skills: {languages, programmingLangs, exp}} = plan;
	return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let str = '';
	let {name, age, skills: {languages, programmingLangs, exp}} = plan;
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

