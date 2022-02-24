class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.director = director;
		this.budget = budget;

		this.wasExpensive = () =>
			console.log(`was expensive status:`, this.budget > 1e8);
	}
}

const movie = new Movie("Avatar", "James Cameron", 237e6);

movie.wasExpensive();
console.log(movie.title);
console.log(movie.director);
console.log(movie.budget);