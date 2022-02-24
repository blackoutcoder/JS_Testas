/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.director = director;
		this.budget = budget;
		this.wasExpensive = () =>
			console.log(`Budget is bigger than 100 000 000 mln USD - `, this.budget > 1e8);
	}
}

const movie = new Movie("The Matrix - revolution", "Wacowsky sisters", 116e8);
movie.wasExpensive();
console.log("Movie title: " + movie.title);
console.log("Directed by: " + movie.director);
console.log("Budget: " + movie.budget + " USD.");