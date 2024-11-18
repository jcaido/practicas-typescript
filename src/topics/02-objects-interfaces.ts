// INTERFACES

interface IPerson {
    name :string;
    lastName: string;
    age :number
}

interface IStudent extends IPerson {
    career :string;
    university: string;
}

// OBJECTS

const juan :IPerson = {
    name: 'Juan',
    lastName: 'Soto Péres',
    age :42
}

const studentPercy :IStudent = {
    name: 'Percy',
    lastName: 'García Kori',
    age :24,
    career: 'Ingeniería informática',
    university: 'Universidad de Córdoba'

}

console.log('Datos de Juan: ', juan);
console.log('Datos del estudiante Percy: ', studentPercy);

export{};