/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
  };

function showObjectKeys(object) {
    let keys = Object.keys(object);
    console.log("Object keys.")
    console.log(keys);
}
showObjectKeys(audi);