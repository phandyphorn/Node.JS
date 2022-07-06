

let container = document.querySelector(".container");
container.remove();

let containerNew = document.createElement("div");
containerNew.className = "containerN"



let h1 = document.createElement("h1");
h1.textContent = "I am not good at dancing."

containerNew.appendChild(h1);

document.body.appendChild(containerNew);
