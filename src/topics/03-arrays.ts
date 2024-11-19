const element = [2, 'sdffdd', false, {name: 'julio'}];
console.log('Elementos: ', element);

const messages :string[] = ['Hello', 'Coders'];
console.log('Messages: ', messages);


//array de objetos

interface IPet {
    name: string;
    age: string;
    species: string;
    isFemale: boolean;
    vaccines: string[];
}

const petFirullay :IPet = {
    name: 'Firulay',
    age: '15 años',
    species: 'Perro',
    isFemale: false,
    vaccines: ['Rabia']
};

const petKitty:IPet = {
    name: 'Kitty',
    age: '8 años',
    species: 'Gato',
    isFemale: true,
    vaccines: ['Rabia', 'Distemper']
}

const pets :IPet[] = [petFirullay, petKitty];
console.log('Mis mascotas: ', pets);

export{}