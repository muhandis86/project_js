
'use strict';

let numberofFilms;

function start() {
	numberofFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

	while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
		numberofFilms = +prompt('Сколько фильмов вы уже просмотрели?','');
	}
}

start();

const personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilms() {
	let lastFilms, rateFilms;

	for (let i = 0; i < numberofFilms; i++) {

		do {
			lastFilms = prompt('Один из последних просмотренных фильмов?','').trim();
		}
		while (lastFilms == '' || lastFilms == null || lastFilms.length <= 10);
	
		do {
			rateFilms = +prompt('Насколько оцените его?','');
		}
		while (rateFilms == null || rateFilms === 0);

		personalMovieDB.movies[lastFilms] = rateFilms;
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30){
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 0; i < 3; i++ ) {
		personalMovieDB.genres[i] = prompt(`"Ваш любимый жанр под номером" ${i + 1}`,'');
	}
}

writeYourGenres();