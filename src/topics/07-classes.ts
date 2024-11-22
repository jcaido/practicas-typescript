class Person {
    name: string;
    public lastNmae: string;
    private age: number

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastNmae = lastName;
        this.age = age;
    }

    getAge() :number {
        return this.age
    }

    walk() :void {
        console.log(`${this.name} está caminando`);
    }
}

const juan = new Person('Juan', 'Pérez Vargas', 15);
console.log('Instancia (Person) "JUAN": ', juan);
console.log('edad de JUAN: ', juan.getAge());

export {}