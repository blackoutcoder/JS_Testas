/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
message = document.getElementById('message');
document.getElementById('btn').addEventListener('click', onClickButton);
function onClickButton(event) {
    event.preventDefault();
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
    for(let i=0;i<data.length;i++)
        addCard(data[i]);
});
}


const addCard = (data) => {
    const card = document.createElement('div');
    card.classList.add(`card`, data.id);
    const login = document.createElement('h1');
    login.textContent = data.login;
    const avatar_url = document.createElement('img');
    avatar_url.src = data.avatar_url;
    message.innerHTML = "";
    card.appendChild(login);
    card.appendChild(avatar_url);
    document.getElementById('output').append(card);
    
};
