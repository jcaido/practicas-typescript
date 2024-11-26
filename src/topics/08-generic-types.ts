import { ICustomer } from "./utils/customer-util";

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

//Recibimos un modelo del backend en formato JSON y podemos pasarlo a TS con la extension JSON to TS de Visual Studio Code (Copy-paste)

/*

{
    "code": "INFO001",
    "message": "Sin errores al procesar",
    "data": {
        "name": "juan",
        "lastName": "Sosa Vega"
    }
}

{
    "code": "INFO001",
    "message": "Sin errores al procesar",
    "data": [
        {
            "name": "juan",
            "lastName": "Sosa Vega"
        },
        {
            "name": "vanessa",
            "lastName": "Campos Torres"
        }
    ]
}

{
    "code": "INFO001",
    "message": "Sin errores al procesar",
    "data": true
}

El backend envía al frontend tres modelos JSON en los que solo varia el atributo data. Podemos utilizar genéricos
*/

interface IResponse<T> {
  code: string;
  message: string;
  data: T;
}

const customer: ICustomer = {
    name: 'Dina',
    lastName: 'Boluarte García',
    email: 'dina@gmail.com',
    address: {
        description: 'Avda. Cordoba',
        city: 'Monturque',
        country: 'España'
    }
}

const responseObjet: IResponse<ICustomer> = {
    code: '23eer',
    message: 'Proceso iniciado',
    data: customer
}

console.log('Response object: ', responseObjet);

export {} 