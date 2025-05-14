console.log("Test");

let age = 22; //number
let name = "Nelson Guijarro"; //String
let hobbies = ["Programar", "Videojuegos"]; //Array
let estudiante = false; //Boolean

let element = document.querySelector("h1");
let button = document.querySelector("button");
let elementoParrafo = document.querySelector("p");
let titulos = document.querySelectorAll("h2");

button.addEventListener("click", () => {
  for (indice = 0; indice < titulos.length; indice++) {
    titulos[indice].textContent = "Elemento " + indice;
  }

  element.textContent = name;
  if (age > 18) {
    elementoParrafo.classList.add("active");
  } else {
    elementoParrafo.classList.add("active");
  }
});

saludar();

function saludar() {
  console.log("Hola mundo");
}
