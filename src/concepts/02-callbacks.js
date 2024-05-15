import { heroes } from "./data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id = '5d86371f233c9f2425f16916';
    findHeroe(id, (error, heroe) => {
        // element.innerHTML = heroe?.name || 'No hay heroe';

        if (error) {
            element.innerHTML = error
        }
        element.innerHTML = heroe.name;

    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => {
    const heroe = heroes.find(hero => hero.id === id);

    if (!heroe) {
        callback(`Heroe with id ${id} not found.`);
        return;
    }
    callback(null, heroe);
}