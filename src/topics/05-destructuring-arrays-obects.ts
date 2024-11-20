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

const {name, lastName, address: {city}} = customer;
console.log('Nombre: ', name);
console.log('Apellidos: ', lastName);
console.log('City: ', city);

console.log('***************************')
console.log('***********ARRAYS**********')
console.log('***************************')

const pokemons :string[] = ['Pikachu', 'Charizard', 'Chikorita'];
console.log('Pokemon 2: ', pokemons[1]);

const [poke1, poke2] = pokemons;
console.log('Pokemon 1: ', poke1);
console.log('Pokemon 2: ', poke2);

const [, , poke3] = pokemons;
console.log('Pokemon 3: ', poke3);


export {}