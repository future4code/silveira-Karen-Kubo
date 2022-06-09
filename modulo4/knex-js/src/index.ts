import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name))

        res.status(200).send(await getActorByName(name))
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

const countGenders = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = ${gender} 
    `)
    const count = result[0][0].count;
    return count;
}

app.get("/actors/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        res.status(200).send(await countGenders(gender))
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

app.put("/actors/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
        .update({
            id: req.body.id,
            salary: req.body.salary
        })
        .where({id: req.params.id})
        res.send(`Ator ${req.params.id} atualizado `)

    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }

} )


app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {
        const linhaDeletadas = await connection("Actor")
        .delete()
        .where({
            id: req.params.id
        })

        if(linhaDeletadas === 0){
            throw new Error()
        }

        res.send('Actor deletado')
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

app.get("/actors/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        const result = await connection("Actor")
        .avg("salary as average")
        .where({gender});
        res.send(200).send(result[0].average)
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

app.get("/actors/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender

        const result = await connection("Actor")
        .count()
        .where(`gender=${gender}`)

        res.status(200).send({quantity: result})
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

app.put("/actors/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
        .update({
            id: req.body.id,
            salary: req.body.salary
        })
        .where({id: req.params.id})

        res.status(200).send(`Ator ${req.params.id} atualizado`)
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

