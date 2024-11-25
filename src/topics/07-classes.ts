import { IAction } from "./utils/actions-interface";

class Person {
    name: string;
    public lastNmae: string;
    private _age: number;
    protected _fullName: string;

    constructor(name: string, lastName: string, age: number, fullName: string) {
        this.name = name;
        this.lastNmae = lastName;
        this._age = age;
        this._fullName = fullName;
    }

    getAge() :number {
        return this._age
    }

    walk() :void {
        console.log(`${this.name} está caminando`);
    }

    private _yearBirth() :number {
       const currentDate = new Date();
       return currentDate.getFullYear();
    }

    talk() :void {
        console.log(`${this.name} está hablando: "Nací en el año ${this._yearBirth()}"`);
    }
}

const juan = new Person('Juan', 'Pérez Vargas', 15, 'Juan Pérez Vargas');
console.log('Instancia (Person) "JUAN": ', juan);
console.log('edad de JUAN: ', juan.getAge());
juan.talk();

class Astronauta extends Person implements IAction {

    numberMastersDegrees: number;

    constructor(name: string, lastName: string, age: number, numberMastersDegrees: number, fullName: string) {
        super(name, lastName, age, fullName);
        this.numberMastersDegrees = numberMastersDegrees;
    }
    pilotShip(): void {
        console.log(`${this.name} tiene permiso para pilotar la nave`);
    }

    getFullName() {
        return this._fullName;
    }
}

console.log('***************************************')
console.log('***DATOS DEL POSTULANTE A ASTRONAUTA***')
console.log('***************************************')

const astronauta = new Astronauta('Jhon', 'Connor', 45, 0, 'Jhon Connor');
console.log('Datos del astronauta: ', astronauta);
console.log('Nombre y apellidos del astronáuta: ', astronauta.getFullName());
astronauta.pilotShip();

export {}