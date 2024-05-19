import { heroes } from "./data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `<h3>${hero1.name}</h3>
                             <h3>${hero2.name}</h3>`;
    }


    const renderError = (error) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }

    const id = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    // findHero(id).then(superHero => renderHero(superHero));
    // Cuando lo que regresa resolve coincide en cantidad y orden de argumentos
    // que va a recibir la funcion, se puede aplicar la sintaxis de abajo
    // .catch(error => renderError(error));
    //! Caso 1 promesa simple
    // findHero(id)
    // .then(renderHero)
    // .catch(renderError);

    //! Caso 2 promise hell

    // findHero(id)
    //     .then((hero1) => {
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

    //! Caso 3 encadenamiento de promesas
    // let hero1;
    // findHero(id)
    //     .then(hero => {
    //         hero1 = hero;
    //         // .then (de arriba) regresa una promesa que puede ser encadenada con otro .then
    //         return findHero(id2);
    //     }).then(hero => {
    //         renderTwoHeroes(hero1, hero)
    //     })
    //     .catch(renderError);

    Promise.all([
        findHero(id),
        findHero(id2)
    ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }
        reject(`Hero with id ${id} not found`);

    });

}