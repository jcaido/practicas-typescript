console.log('***************************')
console.log('***********OBJECTS**********')
console.log('***************************')

interface ICostumer {
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    }
}

const customer :ICostumer = {
    name: 'Melani',
    lastName: 'Figueroa Santos',
    email: 'migueroa@gmail.com',
    address: {description: 'Avda. Córdba, 25', city: 'Aguilar', country: 'España'}
}

console.log('Nombre: ', customer.name);
console.log('Apellidos: ', customer.lastName);

const {name, lastName} = customer;
console.log('Nombre: ', name);
console.log('Apellidos: ', lastName);

export {}