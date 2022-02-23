/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let counter = 0;
outputText = document.getElementById('btn__state');
document.getElementById('btn__element').addEventListener('click', onClickButton);
function onClickButton(event) {
    event.preventDefault();
    counter ++;
    outputText.innerHTML = counter;
}