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

export {};