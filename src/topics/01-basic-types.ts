// number, string, boolean, date, any

//#region NUMBER 

console.log('***************************')
console.log('***********NUMBER**********')
console.log('***************************')

const age = 15;
let weight = 70.5;
weight = 85;
let weight2 :number;
weight2 = 74;

console.log(age);
console.log(weight);
console.log(weight2);

let ageText = '35';
console.log('parseInt =>', parseInt(ageText));

let weightText = '74.56';
console.log('parseFloat =>', parseFloat(weightText));
console.log('Number =>', Number(weightText));

//#endregion

//#region STRING

console.log('***************************')
console.log('***********STRING**********')
console.log('***************************')

let name = 'Cristóbal';
let lastName = 'Rosa Arjona';
console.log('Name =>', name);
console.log('Last Name =>', lastName);

console.log("********* CONCATENACIÓN ************")
console.log(name + ' ' + lastName);
let fullName = `Template literals (String interpolation) => ${name} ${lastName}`;
console.log (fullName);

//#endregion

//#region BOOLEAN

console.log('***************************')
console.log('***********BOOLEAN**********')
console.log('***************************')

const useAngular = true;
const comparisonExpression = 5 > 2;
const booleanText = 'asas';

console.log('Usas Angular?: ', useAngular);
console.log('Comparación mediante una expresión: 5 es mayor que 2? =>', comparisonExpression);
console.log('Convertir texto a boolean utilizando la función Boolean: =>', Boolean(booleanText));
console.log('Convertir texto a boolean usando doble negación => ', !!booleanText);

//#endregion

//#region DATE
console.log('***************************')
console.log('***********DATE**********')
console.log('***************************')

const dateNow = new Date();
console.log('fecha actual: ', dateNow);
console.log('El año actual es: ', dateNow.getFullYear());

//#endregion

//#region ANY
console.log('***************************')
console.log('***********ANY**********')
console.log('***************************')

let valueAny :any = 'Hola coders';
console.log('Valor Any: ', valueAny);

valueAny = 5;
console.log('Valor Any número: ', valueAny);

//#endregion

export {};