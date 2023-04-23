/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 10 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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
	while (lastFilms == '' || lastFilms == null || lastFilms.length <= 10);
	
	do {
		rateFilms = +prompt('Насколько оцените его?','');
	}
	while (rateFilms == null || rateFilms === 0);

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

