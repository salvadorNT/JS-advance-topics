/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction();
    console.log(myGenerator.next()) // Primer valor
    console.log(myGenerator.next()) // Segundo valor
    console.log(myGenerator.next()) // Tercer valor
    console.log(myGenerator.next()) // Cuarto valor
    console.log(myGenerator.next()) // No hay valores
    console.log(myGenerator.next()) // undefined

    const genID = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append(button);

    const renderButton = () => {
        const { value } = genID.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton)
}

function* idGenerator(){
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'No hay valores';
    yield 'Ya no se ejecuta';
}