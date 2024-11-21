class Person {
    name: string;
    lastNmae: string;

    constructor(name: string, lastName: string) {
        this.name = name;
        this.lastNmae = lastName;
    }

    walk() :void {
        console.log(`${this.name} está caminando`);
    }
}

const juan = new Person('Juan', 'Pérez Vargas');
console.log('Instancia (Person) "JUAN": ', juan);

export {}