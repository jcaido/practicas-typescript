const array1 = [1, 5, 2, 9, 1];
const array2 = ['a', 'b', 'c'];

const getFirstElement = (array :string[]) => {
    return array[0];
}

const getFirstElement2 = (array: number[]) => {
    return array[0];
}

console.log(getFirstElement(array2));
console.log(getFirstElement2(array1));

// Utilizando generics evitamos tener que definir dos funciones distintas

const getFirstItem = <T>(array: T[]) => {
    return array[0];
}

console.log(getFirstItem<string>(array2));
console.log(getFirstItem<number>(array1));

export {} 