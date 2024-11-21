import { ICustomer, showCustomerData } from "./utils/customer-util"

const customer: ICustomer = {
    name: 'Dina',
    lastName: 'Boluarte García',
    email: 'dina@gmail.com',
    address: {
        description:'Tomás Valle',
        city: 'Lima',
        country: 'Perú'
    }
}

showCustomerData(customer);

export {}