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

export {}