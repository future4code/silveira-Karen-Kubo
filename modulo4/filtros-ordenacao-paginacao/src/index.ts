import { app } from "./app";
import { getAllUsers, getAllUsersSortByName, getAllUsersSortByType, getAllUsersOrder, getFiveUsers } from "./endpoints/getAllUsers";

app.get("/users/:type", getAllUsers)

// app.get("/users", getAllUsersSortByName)

// app.get("/users/:type", getAllUsersSortByType)

// app.get("/users/", getAllUsersOrder)

// app.get("/users/", getFiveUsers)