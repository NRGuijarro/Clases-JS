let addButton = document.getElementById("add");
let substractButton = document.getElementById("substract");
let createBtnButton = document.getElementById("createBtn");
let removeButton = document.getElementById("removeBtn");

let numero = document.querySelector("h1");
let contador = 0;

let elementosCreados = [];

addButton.addEventListener("mousemove", () => {
  contador++;
  numero.textContent = contador;
});

substractButton.addEventListener("click", () => {
  contador--;
  numero.textContent = contador;
});

createBtnButton.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.textContent = "Esto es un p generado en js";
  elementosCreados.push(newElement);
  document.querySelector("body").appendChild(newElement);
});

removeButton.addEventListener("click", () => {
  if (elementosCreados.length > 0) {
    let elementoABorrar = elementosCreados.pop();
    document.querySelector("body").removeChild(elementoABorrar);
  }
});
