//METODOS

console.log('***************************')
console.log('***********METHODS**********')
console.log('***************************')

function showMessages() :void {
    console.log('Hello coders');
}

const greet = (name :string) :void => {
    console.log(`Hello ${name}`);
}

showMessages();
greet('Cristóbal');

//FUNCTIONS

console.log('***************************')
console.log('***********FUNCTIONS**********')
console.log('***************************')

function sum1(a :number, b :number) :number {
    return a + b;
}

const sum2 = (a :number, b :number) :number => {
    return a + b;
}

console.log('1) Suma de números: ', sum1(5, 6));
console.log('2) Suma de números: ', sum2(10, 6));

//esto es una mala práctica
const showStudentData = (
    name :string,
    lastName :string,
    age :number,
    career :string,
    university :string,
    cycle :number
) :void => {
    console.log('*** Los datos del estudiante son los siguientes ***');
    console.log('Nombre: ', name);
    console.log('Apellidos: ', lastName);
    console.log('Edad: ', age);
    console.log('Carrera: ', career);
    console.log('Universidad: ', university);
    console.log('Ciclo actual: ', cycle);
}

showStudentData('Cristóbal', 'Rosa Arjona', 52, 'Empresariales', 'Córdoba', 5);

// buena práctica: pasamos un objeto con la lista de parámetros

interface IStudent {
    name :string,
    lastName :string,
    age :number,
    career :string,
    university :string,
    cycle :number
}

const showStudentData2 = (data :IStudent) :void => {
    console.log('*** Los datos del estudiante son los siguientes ***');
    console.log('Nombre: ', data.name);
    console.log('Apellidos: ', data.lastName);
    console.log('Edad: ', data.age);
    console.log('Carrera: ', data.career);
    console.log('Universidad: ', data.university);
    console.log('Ciclo actual: ', data.cycle);
}

const studentCristobal :IStudent = {
    name: 'Cristóbal',
    lastName: 'Rosa Arjona',
    age: 52,
    career: 'Empresariales',
    university: 'Córdoba',
    cycle: 5
}

showStudentData2(studentCristobal);

export {}