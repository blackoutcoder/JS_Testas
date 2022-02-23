/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        for(let i=0;i<data.length;i++)
            addCard(data[i]);
});



const addCard = (data) => {
    const card = document.createElement('div');
    card.classList.add(`card`, data.id);
    const brand = document.createElement('h1');
    brand.textContent = data.brand;
    const models = document.createElement('h3');
    models.textContent = data.models;
    card.appendChild(brand);
    card.appendChild(models);
    document.getElementById('output').append(card);
    console.log(data);
};