import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import { Task, User, Task_responsible } from "./data";

//1- Criar usuário
app.post("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, nickname, email } = req.body;
        if (!name || !nickname || !email) {
            errorCode = 422;
            throw new Error("Please check the fields!")
        } else {
            const newUser: User = {
                id: Date.now().toString(),
                name,
                nickname,
                email
            }

            await connection(`User`).insert(newUser)
            res.status(201).send({ User: newUser })
        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//2 - Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const idParams = req.params.id;
        if (!idParams) {
            errorCode = 401;
            throw new Error("Please check the params from ID")
        } else {
            const result = await connection(`User`).select(`*`).where({ id: idParams })
            if (result.length > 0) {
                res.status(200).send({ result })
            } else {
                throw new Error("No user has been found")
            }

        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//3 - Editar usuário

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const idParams = req.params.id;
        const { name, nickname } = req.body;
        if (!idParams) {
            errorCode = 401;
            throw new Error("Please check the params from ID")
        } else if (!name || !nickname) {
            errorCode = 422;
            throw new Error("Please check the fields")
        } else {
            const result = await connection(`User`).update({
                name: name,
                nickname: nickname
            }).where({ id: idParams })
            if (result === 0) {
                errorCode = 404;
                throw new Error("User has not been found")
            } else {
                res.status(200).send("User updated successfully!")
            }
        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//4 - Criar tarefa

app.post("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        let { title, description, limit_date, status, creatorUserId } = req.body;

        if (!title || !description || !limit_date || !creatorUserId) {
            errorCode = 401;
            throw new Error("Please check the fields")
        } else {
            limit_date = limit_date.split("/").reverse().join("/");
            let UserNickName = await connection(`User`).select(`nickname`).where({ id: creatorUserId });
            let creatorUserNickName = UserNickName[0].nickname as string;

            const newTask: Task = {
                "taskId": Date.now().toString(),
                title,
                description,
                limit_date,
                status,
                creatorUserId,
                creatorUserNickName
            }

            await connection(`Task`).insert(newTask)
            res.status(201).send({ Task: newTask })

        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})


//5 - Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const idParams = req.params.id;
        if (!idParams) {
            errorCode = 401;
            throw new Error("Please check the params from ID")
        } else {
            let result = await connection(`Task`).select(`*`).where({ taskId: idParams })
            if (result.length > 0) {
                let myDate = new Date(result[0].limit_date.toDateString());
                let getDate = myDate.getDate();
                let getMonth = myDate.getMonth();
                let getYear = myDate.getFullYear();
                result[0].limit_date = `${getDate}/${getMonth}/${getYear}`
                res.status(200).send({ result })
            } else {
                throw new Error("No task has been found")
            }

        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//6 - Pegar todas as tarefas
app.get("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        let result = await connection(`User`).select(`*`)
        res.status(200).send({ users: result })
    }

    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//7 - Pegar tarefas criadas por um usuário
app.get("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const creatorUserId = req.query.creatorUserId;
        if (!creatorUserId) {
            errorCode = 401;
            throw new Error("Please check the query for creatorUserId")
        } else {
            const result = await connection(`Task`).select(`*`).where({ creatorUserId: creatorUserId })
            if (result.length > 0) {
                result.forEach((res) => {
                    let date = new Date(res.limit_date.toDateString());
                    let getDate = date.getDate();
                    let getMonth = date.getMonth();
                    let getYear = date.getFullYear();
                    res.limit_date = `${getDate}/${getMonth}/${getYear}`
                })
                res.status(200).send({ tasks: result })
            } else {
                res.status(200).send({ tasks: [] })
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//8 - Pesquisar usuário 
app.get("/task", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nickname = req.query.nickname;
        if (!nickname) {
            errorCode = 401;
            throw new Error("Please check the query for nickname")
        } else {
            const result = await connection(`User`).select(`id, nickname`).where({ nickname: nickname })

            if (result.length > 0) {
                res.status(200).send({ User: result })
            } else {
                res.status(200).send({ User: [] })
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//9- Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { task_id, responsible_user_id } = req.body;
        if (!task_id || !responsible_user_id) {
            errorCode = 422;
            throw new Error("Please check the fields!")
        } else {
            const validateUser = await connection(`User`).select(`*`).where({ id: responsible_user_id })
            const validateTask = await connection(`Task`).select(`*`).where({ taskId: task_id })
            if (validateTask.length > 0 && validateUser.length > 0) {
                const taskResponsible: Task_responsible = {
                    task_id,
                    responsible_user_id
                }

                await connection(`Task_responsible`).insert(taskResponsible)
                res.status(201).send({ User: taskResponsible })
            } else {
                errorCode = 404;
                throw new Error("Task or user was not found")
            }

        }

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})

//9- Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const id = req.params.id;
        if (!id) {
            errorCode = 401;
            throw new Error("Please check the params!")
        } else {
            let result = await connection.raw(`
            SELECT User.id, User.nickname FROM User JOIN Task ON User.id = Task.creatorUserId WHERE taskId = ${id}
            `)
            result = result[0]
            if (result[0] === null || result[0] === undefined) {
                errorCode = 404;
                throw new Error(`Task was not found`)
            } else if (result[0].nickname && result[0].id) {
                res.status(200).send({ user: result })
            }
        }
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send({ message: error.sqlMessage || error.message })
        } else {
            res.status(errorCode).send({ message: error.sqlMessage || error.message })
        }
    }
})
