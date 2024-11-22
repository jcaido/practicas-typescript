class Person {
    name: string;
    public lastNmae: string;
    private _age: number

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastNmae = lastName;
        this._age = age;
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

const juan = new Person('Juan', 'Pérez Vargas', 15);
console.log('Instancia (Person) "JUAN": ', juan);
console.log('edad de JUAN: ', juan.getAge());
juan.talk();

class Astronauta extends Person {

    numberMastersDegrees: number;

    constructor(name: string, lastName: string, age: number, numberMastersDegrees: number) {
        super(name, lastName, age);
        this.numberMastersDegrees = numberMastersDegrees;
    }
}

console.log('***************************************')
console.log('***DATOS DEL POSTULANTE A ASTRONAUTA***')
console.log('***************************************')

const astronauta = new Astronauta('Jhon', 'Connor', 45, 0);
console.log('Datos del astronauta: ', astronauta);

export {}