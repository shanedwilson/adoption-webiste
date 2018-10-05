import {sortPets} from './components/petComponent.js'

const allButton = document.getElementById('all');
const catButton = document.getElementById('cat');
const dogButton = document.getElementById('dog');
const dinoButton = document.getElementById('dino');

const allButtonEvent = () => {
    allButton.addEventListener('click', sortPets);
};

const catButtonEvent = () => {    
    catButton.addEventListener('click', sortPets);
};    

const dogButtonEvent = () => {
    dogButton.addEventListener('click', sortPets);
};

const dinoButtonEvent = () => {
    dinoButton.addEventListener('click', sortPets);
}

const sortEvents = () => {
    allButtonEvent();
    catButtonEvent();
    dogButtonEvent();
    dinoButtonEvent();
};  

export {sortEvents};