'use strict';

const numberofFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastFilms = prompt('Один из последних просмотренных фильмов?',''),
	  rateFilms = prompt('Насколько оцените его?',''),
	  lastFilms2 = prompt('Один из последних просмотренных фильмов?',''),
	  rateFilms2 = prompt('Насколько оцените его?','');

personalMovieDB.movies[lastFilms] = rateFilms;
personalMovieDB.movies[lastFilms2] = rateFilms2;

console.log(personalMovieDB);
