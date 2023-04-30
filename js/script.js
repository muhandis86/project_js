
'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?','');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?','');
		}
	},
	rememberMyFilms: function() {
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
		return personalMovieDB;
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count > 30){
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(key) {
		(key) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
	},
	writeYourGenres: function() {
		for (let i = 0; i < 3; i++ ) {
			personalMovieDB.genres[i] = prompt(`"Ваш любимый жанр под номером" ${i + 1}`,'');
			if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') i--; 
		}
		personalMovieDB.genres.forEach(function(element, i) {
			console.log(`Любимый жанр #${i + 1} - это ${element}`);
		});
	}
};

console.log(personalMovieDB.rememberMyFilms());
personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();