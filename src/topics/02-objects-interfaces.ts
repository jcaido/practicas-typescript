// INTERFACES

interface IPerson {
    name :string;
    lastName: string;
    age :number
}

// OBJECTS

const juan :IPerson = {
    name: 'Juan',
    lastName: 'Soto Péres',
    age :42
}

console.log('Datos de Juan: ', juan);

export{};