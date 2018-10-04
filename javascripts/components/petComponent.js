import { printToDom } from "../helpers/util.js";

let pets = [];

const setPets = (newArray) => {
  pets = newArray;
};

const petsBuilder = () => {
  let domString = "";
  pets.forEach(pet => {
    domString +=  `<div class="card" style="width: 18rem;">`
    domString +=  `  <div class="card-header text-center">${pet.name}</div>`
    domString +=  `    <img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`
    domString +=  `    <div class="card-body">`
    domString +=  `      <h5 class="card-title text-center">${pet.color}</h5>`
    domString +=  `      <p class="card-text text-justify">${pet.specialSkill}</p>`
    domString +=  `      <div class="card-footer text-center">${pet.type}</div>`
    domString +=  `    </div>`
    domString +=  `  </div>`
  });
  printToDom(domString);
  // createEvents();
}

export {setPets, petsBuilder};