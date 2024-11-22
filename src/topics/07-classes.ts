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

export {}