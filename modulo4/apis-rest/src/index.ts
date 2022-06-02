import express, { Request, Response } from "express";
import cors from "cors";
import { users, User, TYPE } from "./data";
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//1 a) GET
//1 b) "/users"

//2 e 3
//Utilizando-se enum, apenas os listados são válidos
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const type: TYPE = req.query.type as TYPE;
        const name: string = req.query.name as string;

        const user: User | undefined = users.find((user) => {
            return (user.type === type || user.name === name)
        });

        if (!user) {
            errorCode = 404;
            throw new Error("User not found");
        } else {
            res.status(200).send(user);
        }
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
})

//4 
//O método put só deve ser utilizado para alteração dos dados do usuário, não para a criação de um novo.
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { id, name, email, type, age } = req.body;

        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }

        const newUser: User = {
            id: id as number,
            name: name as string,
            email: email as string,
            type: type as TYPE,
            age: age as number,
        };
        users.push(newUser);
        res.status(201).send({ message: "User created successefully" });

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
})

app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id)
        const { name, email, type, age } = req.body;

        if (!id) {
            errorCode = 401;
            throw new Error("Please check the params!");
        } else if (isNaN(id)) {
            errorCode = 401; 
            throw new Error("Invalid value for id. Please send a number.");
        } else {
            const user: User[] = users.map((user) => {
                if (user.id === id) {
                    return user = {
                        id: id,
                        name: name as string,
                        email: email as string,
                        type: type as TYPE,
                        age: age as number
                    }
                }
                return user
            });
            res.status(201).send(user)
        }
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
})