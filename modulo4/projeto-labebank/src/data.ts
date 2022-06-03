export type Client = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    expenses: Expenses[]
}

export type Expenses = {
    name: string,
    cpf: number,
    value: number,
    description: string,
    dueDate?: string,
    addressee?: string,
    addresseeCpf?: number
}


export const allClients:Client[] = [
    {
        name: "Teste",
        cpf: 12345678900,
        birthDate: "01/01/2001",
        balance: 0,
        expenses: []
    },
    {
        name: "Karen",
        cpf: 38615123861,
        birthDate: "09/04/1999",
        balance: 100,
        expenses: []
    },
    {
        name: "Antonella",
        cpf: 26781662232,
        birthDate: "09/04/1999",
        balance: 130,
        expenses: []
    },
    {
        name: "Bruno",
        cpf: 94661887422,
        birthDate: "09/04/1999",
        balance: 9000,
        expenses: []
    },
    {
        name: "Sofia",
        cpf: 33322266699,
        birthDate: "09/04/1999",
        balance: 1,
        expenses: []
    }

]
