// #2 - API URL 

const API_URL = "https://randomuser.me/api";

axios
.get(API_URL)
.then(response => {
    // Your code here...
    let datas = response.results.name;
    console.log(datas);

    for (data of datas) {
      title.textContent = data.title;
      firstname.textContent = data.firstname;
      lastname.textContent = data.lastname;
    }
})
.catch(err => {
  console.log(err);
})


/**
 * Main 
 * 
 */
const cardContainer = document.querySelector('.card-container');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const title = document.querySelector('.title');
const image = document.querySelector('img');

const phone = document.querySelector('.phone');
const gender = document.querySelector('.gender');

cardContainer.appendChild(title);
cardContainer.appendChild(firstname);
cardContainer.appendChild(lastname);

document.body.appendChild(cardContainer);
