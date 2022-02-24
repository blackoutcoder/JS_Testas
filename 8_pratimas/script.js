/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;

------------------------------------------------------------------------------------ */
function Calculator(x, y) {
	this.x = x;
	this.y = y;
	this.sum = (x, y) => {
		return this.x + this.y;
	};

	this.subtraction = (x, y) => {
		return this.x - this.y;
	};

	this.multiplication = (x, y) => {
		return this.x * this.y;
	};

	this.division = (x, y) => {
		return this.x / this.y;
	};
}

const numbers = new Calculator(10, 20);

console.log("Summ: " + numbers.sum() + ", substraction: " +  numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.division());

