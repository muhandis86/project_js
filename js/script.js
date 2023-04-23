'use strict';

const numberofFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastFilms, rateFilms;

for (let i = 0; i < numberofFilms; i++) {

	do {
		lastFilms = prompt('Один из последних просмотренных фильмов?','');
	}
	while (lastFilms.length <= 10);
	
	do {
		rateFilms = +prompt('Насколько оцените его?','');
	}
	while (rateFilms === 0);

	personalMovieDB.movies[lastFilms] = rateFilms;
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30){
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);

