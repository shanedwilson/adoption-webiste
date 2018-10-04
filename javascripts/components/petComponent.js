let pets = [];

const setPets = (newArray) => {
  pets = newArray;
};

const petsBuilder = () => {
  console.log(pets)
}

export {setPets, petsBuilder};