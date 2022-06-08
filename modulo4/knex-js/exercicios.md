### 1a)
Ele devolve todas as respostas do banco de dados (muito além do que precisamos).
### 1b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

app.get("/users/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

### 1c)
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

### 2a)

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

### 2b)
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

### 2c)
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

### 3)
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

### 4a)
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


### 4b)
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