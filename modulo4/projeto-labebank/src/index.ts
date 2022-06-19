import express, { Request, RequestHandler, Response } from "express";
import cors from "cors";
import { allClients, Client, Expenses } from "./data";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
//Creating new user
app.post("/clients", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { name, cpf, birthDate } = req.body

        if (!name || !cpf || !birthDate) {
            errorCode = 422;
            throw new Error("Please check the fields!")
        }

        const newClient: Client = {
            name,
            cpf,
            birthDate,
            balance: 0,
            expenses: []
        }
        console.log(newClient)

        function gettingAge(birthDate: string): number {
            const [day, month, year] = birthDate.split('/')
            const birthDateFormatted = new Date(`${year}-${month}-${day}`)

            const birthDateinMilliseconds = birthDateFormatted.getTime()
            const today = new Date().getTime()

            const age = Math.floor((today - birthDateinMilliseconds) / (1000 * 60 * 60 * 24 * 365))
            return age;
        }

        const age = gettingAge(birthDate)
        console.log(age)

        const userRegistered: Client[] = allClients.filter((client) => client.cpf === cpf)
        if (isNaN(cpf)) {
            errorCode = 401;
            throw new Error("Check the CPF field as it only accepts numbers")
        }
        if (userRegistered.length > 0) {
            errorCode = 409;
            throw new Error("User is already registered")
        }
        if (age < 18) {
            errorCode = 403;
            throw new Error("You need to be at least 18 years old to become a client")
        }
        allClients.push(newClient);
        res.status(201).send("User created successfully!")

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }

    }

})
//Getting all clients
app.get("/clients", (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const name: string = req.query.name as string;

        if (!allClients) {
            errorCode = 404;
            throw new Error("User not found");
        } else if (name) {
            const clients: Client[] | undefined = allClients.filter((client) => client.name === name);

            if (clients.length > 0) {
                res.status(200).send(clients);
            } else {
                errorCode = 404;
                throw new Error("User not found")
            }
        } else {
            res.status(200).send(allClients);
        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})
//Finding user balance
app.get("/clients/balance", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nameReq = String(req.headers.name)
        const cpfReq = Number(req.headers.cpf)

        if (!nameReq || !cpfReq) {
            errorCode = 401;
            throw new Error("Unauthorized! There has to be a name and cpf in the headers section")
        }
        else {
            if (isNaN(cpfReq)) {
                errorCode = 422;
                throw new Error("CPF only accepts number characters")
            } else {
                const findClientBalance = allClients.find((client) => {
                    return (client.name.toLowerCase() == nameReq.toLowerCase() && client.cpf == cpfReq)
                })
                if (findClientBalance === undefined) {
                    errorCode = 404;
                    throw new Error("User not found")
                } else {
                    res.status(200).send({ Balance: findClientBalance.balance })
                }
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }
    }

})
//Changing current balance
app.put("/clients/balance", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nameReq = String(req.headers.name)
        const cpfReq = Number(req.headers.cpf)
        const deposit = Number(req.body.balance)

        if (!nameReq || !cpfReq) {
            errorCode = 401;
            throw new Error("Unauthorized! There has to be a name and cpf in the headers section")
        }
        else if (!deposit || deposit <= 0) {
            errorCode = 422;
            throw new Error("Unauthorized! There has to be a new value to change your balance (higher than 0)")
        }
        else {
            if (isNaN(cpfReq) || isNaN(deposit)) {
                errorCode = 422;
                throw new Error("CPF and your new balance only accepts number characters")
            } else {
                const findClientBalance = allClients.find((client) => {
                    return (client.name.toLowerCase() == nameReq.toLowerCase() && client.cpf == cpfReq)
                })
                if (findClientBalance === undefined) {
                    errorCode = 404;
                    throw new Error("User not found")
                } else {
                    findClientBalance.balance = deposit;
                    res.status(200).send({ Balance: findClientBalance.balance })
                }
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }
    }

})

//Paying debts;
app.put("/clients/payment", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, cpf, value, description, dueDate } = req.body

        const newExpense: Expenses = {
            name,
            cpf,
            value,
            description,
            dueDate
        }

        if (!name || !cpf || !value || !description) {
            errorCode = 422;
            throw new Error("Please, check the fields")
        } else {
            const client = allClients.find((client) => {
                return (client.name.toLowerCase() == name.toLowerCase() && client.cpf == cpf)
            })
            if (client === undefined) {
                errorCode = 404;
                throw new Error("User wasn't found")
            }
            if (isNaN(cpf) || isNaN(value)) {
                errorCode = 422;
                throw new Error("CPF and the value only accept number characters")
            } else {
                if (dueDate !== undefined) {
                    function isPossible(dueDate: string): number {
                        const [day, month, year] = dueDate.split('/')
                        const dateFormatted = new Date(`${year}-${month}-${day}`)

                        const paymentDateTime = dateFormatted.getTime()
                        const today = new Date().getTime()

                        const paymentDate = Math.floor((paymentDateTime - today) / (1000 * 60 * 60 * 24 * 365))
                        return paymentDate;
                    }
                    const paymentDate = isPossible(dueDate)
                    if (paymentDate >= 0 && (client.balance - value >= 0)) {
                        client.expenses.push(newExpense)
                        client.balance = client.balance - value
                        res.status(200).send(client)
                    } else if (paymentDate < 0) {
                        errorCode = 422;
                        throw new Error("Due date has expired")
                    }
                }
                if (dueDate === undefined && (client.balance - value >= 0)) {
                    client.expenses.push(newExpense)
                    client.balance = client.balance - value
                    res.status(200).send(client)
                } else if (client.balance - value < 0) {
                    errorCode = 400;
                    throw new Error("You do not have enough balance to complete this transaction!")
                }
            }
        }


    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

//Internal transfer
app.put("/clients/transactions", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, cpf, value, description, addressee, addresseeCpf } = req.body

        const newTransferPayer: Expenses = {
            name,
            cpf,
            value,
            description,
            addressee,
            addresseeCpf
        }

        const newTransferReceiver: Expenses = {
            name,
            cpf,
            value,
            description
        }

        if (!name || !cpf || !value || !description || !addressee || !addresseeCpf) {
            errorCode = 422;
            throw new Error("Please, check the fields")
        } else {
            const payer = allClients.find((client) => {
                return (client.name.toLowerCase() == name.toLowerCase() && client.cpf == cpf)
            })
            const receiver = allClients.find((client) => {
                return (client.name.toLowerCase() == addressee.toLowerCase() && client.cpf == addresseeCpf)
            })
            if (payer === undefined) {
                errorCode = 404;
                throw new Error("User (payer) wasn't found")
            }
            if (receiver === undefined) {
                errorCode = 404;
                throw new Error("User (receiver) wasn't found")
            }
            if (isNaN(cpf) || isNaN(value) || isNaN(addresseeCpf)) {
                errorCode = 422;
                throw new Error("CPF and the value only accept number characters")
            } else {

                if (payer.balance - value >= 0) {
                    //for the payer
                    payer.expenses.push(newTransferPayer)
                    payer.balance = payer.balance - value
                    //for the receiver
                    receiver.expenses.push(newTransferReceiver)
                    receiver.balance = receiver.balance + value
                    res.status(200).send({ Payer: payer, Receiver: receiver })
                } else if (payer.balance - value < 0) {
                    errorCode = 400;
                    throw new Error("You do not have enough balance to complete this transaction!")
                }
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})