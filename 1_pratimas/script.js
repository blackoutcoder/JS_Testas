/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener("submit", checkForm);
weightOutput = document.getElementById('output');
let weightG = 0;
let weightLb = 0;
let weightOz = 0;
function checkForm(event) {
    event.preventDefault();
    const weightKg = document.getElementById('search').value;
    weightLb = weightKg * 2.2046;
    weightG = weightKg / 0.0010000;
    weightOz = weightKg * 35.274;
    weightOutput.innerHTML = weightKg + " Kg, " + weightLb + " lb, " + weightG + " g, " + weightOz + " OZ."  
}

