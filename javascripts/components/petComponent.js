import { printToDom } from "../helpers/util.js";

let pets = [];
let counter = 0;

const setPets = newArray => {
  pets = newArray;
  console.log(pets);
};

const getPetz = () => {
  return pets;
};

const sortPets = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'all') {
    petsBuilder(pets);
  } else {
  const filteredPets = pets.filter(x => x.type === buttonId);
  petsBuilder(filteredPets);
  }
};

const petsBuilder = (newPets) => {
  let domString = "";
  newPets.forEach(pet => {
    domString += `<div class="col-4 h-100">`;
    domString += `<div id="card${counter}" class="card border-dark mb-3">`;
    domString += `  <div class="card-header text-center">${pet.name}</div>`;
    domString += `    <img class="card-img-top p-3" src="${pet.imageUrl}" alt="${
      pet.name
    }">`;
    domString += `    <div class="card-body">`;
    domString += `      <h5 class="card-title text-center">${pet.color}</h5>`;
    domString += `      <p class="card-text text-justify">${
      pet.specialSkill
    }</p>`;
    if (pet.type === "dog") {
      domString += `      <div id="footer${counter}" class="card-footer text-center bg-success">${
        pet.type
      }</div>`;
    } else if (pet.type === "cat") {
      domString += `      <div id="footer${counter}" class="card-footer text-center bg-primary">${
        pet.type
      }</div>`;
    } else {
      domString += `      <div id="footer${counter}" class="card-footer text-center bg-warning">${
        pet.type
      }</div>`;
    }
    domString += `    </div>`;
    domString += `  </div>`;
    domString += `</div>`;
  });
  printToDom(domString);
  counter++;
};

export { setPets, petsBuilder, getPetz, sortPets };