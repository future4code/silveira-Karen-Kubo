import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getRecipe } from "./endpoints/getRecipe";
import { getUserByProfile } from "./endpoints/getUserByProfile";
import { login } from "./endpoints/login";
import { signUp } from "./endpoints/signUp";

app.post("/user", signUp);
app.post("/user/login", login);
app.get("/user", getAllUsers);
app.get("/user/profile", getUserByProfile);
app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);