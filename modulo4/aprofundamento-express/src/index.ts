import express from "express";
import cors from "cors";
import { todos, Todos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

// type Todos = {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

app.get("/todos", (req, res) => {
    res.send(todos)
})

app.post("/todos", (req, res) => {
    const bodyUserId = Number(req.body.userId)
    const bodyId = Number(req.body.id)
    const bodyTitle = String(req.body.title)
    const bodyCompleted = Boolean(req.body.completed)

    const newTodo: Todos = {
        userId: bodyUserId,
        id: bodyId,
        title: bodyTitle,
        completed: bodyCompleted
    }
    todos.push(newTodo)

    res.send(todos)
})

app.put("/todos/:id", (req, res) => {
    const idParams = Number(req.params.id)
    for (const todo of todos) {
        if (idParams === todo.id) {
            todo.completed = !todo.completed
        }
    }
    res.send(todos)
})

app.delete("/todos/:id", (req, res) => {
    const idParams = Number(req.params.id)

    const newTodos = todos.filter((todo) => {
        if(idParams !== todo.id) {
            return todo
        }
    })
    
    res.send(newTodos)
})

app.get("/todos/:userId", (req, res) => {
    const userIdParams = Number(req.params.userId)
    
    const userTodos = todos.filter((todo)=>{
        if (userIdParams === todo.userId) {
        return todo
    }
    })
    const others = todos.filter((todo) => {
        if (userIdParams !== todo.userId) {
            return todo
        }
    })
    res.send({todos:{selectedUser: userTodos, others: others}})

})

