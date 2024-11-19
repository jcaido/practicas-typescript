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

export {}