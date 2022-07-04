import { app } from "./app";
import { deleteUser, get, login, signup } from "./controller/UserController";

app.post("/signup", signup);
app.post("/login", login);
app.get("/all", get);
app.delete("/:id", deleteUser);