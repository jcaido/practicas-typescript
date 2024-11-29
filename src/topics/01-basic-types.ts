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

console.log('***************************')
console.log('***********NUMBER PRACTICE**********')
console.log('***************************')

const forecastPrecipitacion = 25;
let rainProbability: number = 75;
console.log(`Precipitación prevista: ${forecastPrecipitacion} mm`);
console.log(`Probabilidad de precipitación: ${rainProbability} %`);

const humidity = '54';
const humidityNumber = parseInt(humidity);
const currentPrecipitacion = '23.6';
const currentPrecipitacionNumber = parseFloat(currentPrecipitacion);

console.log(`Humedad del: ${humidityNumber} %`);
console.log(`Precipitación actualizada: ${currentPrecipitacionNumber} mm`);

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

console.log('***************************')
console.log('***********STRING PRACTICE**********')
console.log('***************************')

let cpNumber = '14920';
let village = 'Aguilar de la Frontera';
let city = 'Cordoba';
console.log('Código Postal: ' + cpNumber + " .- " + village + ' .- ' + city);
console.log(`Código Postal: ${cpNumber} .- ${village} .- ${city}`);


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