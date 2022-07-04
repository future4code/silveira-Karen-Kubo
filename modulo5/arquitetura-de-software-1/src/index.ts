import { app } from "./app";
import { signup } from "./controller/signup";

app.post("/signup", signup);
