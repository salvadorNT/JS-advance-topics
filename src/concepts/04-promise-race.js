/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        fastPromise(),
        mediumPromise(),
    ])
    .then(renderValue)

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise')
    }, 2000)
})
const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium promise')
    }, 1500)
})
const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise')
    }, 1000)
})