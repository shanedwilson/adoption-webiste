let pets = [];

const setPets = (newArray) => {
  pets = newArray;
};

const petsBuilder = (petsArray) => {
  let domString = "";
  petsArray.forEach(pet => {
    domString +=  `<div class="card" style="width: 18rem;">`
    domString +=  `  <div class="card-header">${pet.name}</div>`
    domString +=  `    <img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`
    domString +=  `    <div class="card-body">`
    domString +=  `      <h5 class="card-title">${pet.color}</h5>`
    domString +=  `      <p class="card-text">${pet.specialSkill}</p>`
    domString +=  `      <div class="card-footer text-muted">${pet.type}</div>`
    domString +=  `    </div>`
    domString +=  `  </div>`
  });
  printToDom(domString);
  // createEvents();
}

export {setPets, petsBuilder};