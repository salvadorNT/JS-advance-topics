/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {
    
    console.time('Start');
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();
    //! await o promise
    // Se usa la sintaxis de arriba (await) cuando los valores devueltos
    // dependen del resultado anterior.
    // De otra forma, si no dependen una de la otra, se mejora el rendimiento
    // ejecutando todas con un await Promise
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
    value 1: ${value1} </br>
    value 2: ${value2} </br>
    value 3: ${value3} </br>
    `
    console.timeEnd('Start')

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