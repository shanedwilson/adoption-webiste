let pets = [];

const setPets = (newArray) => {
  pets = newArray;
};

const petsBuilder = (petsArray) => {
  console.log(pets)
}

export {setPets, petsBuilder};