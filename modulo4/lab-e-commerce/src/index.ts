import { getPurchasesWithUsers } from './endpoint/getUsersPurchases';
import { getPurchases } from './endpoint/getPurchasesFromUser';
import { postPurchase } from './endpoint/postPurchase';
import { postPurchaseFunction } from './data/postPurchaseFunction';
import { getProducts } from './endpoint/getProducts';
import { postProducts } from './endpoint/postProducts';
import { getUsers } from './endpoint/getUsers';
import { connection } from './data/connection';
import { app } from './app';
import { postUser } from './endpoint/postUser';

app.get("/users", getUsers)

app.post("/users", postUser)

app.post("/products", postProducts)

app.get("/products", getProducts)

app.post("/purchases", postPurchase)

app.get("/users/:user_id/purchases", getPurchases)

app.get("/users/purchases", getPurchasesWithUsers)