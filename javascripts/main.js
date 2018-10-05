import { getPets } from './data/petData.js';
import { sortEvents } from './events.js';

const initializeApp = () => {
    getPets();
    sortEvents();
};

initializeApp();