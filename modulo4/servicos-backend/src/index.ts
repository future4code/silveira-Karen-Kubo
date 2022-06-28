import { insertAdress } from './endpoint/insertAddress';
import { AddressInfo } from "net";
import {app} from "./app";
import { getFullAddress } from "./endpoint/getFullAddress";
import { Request, Response } from 'express';

app.get("/address/:cep", getFullAddress);

// app.post("/user/:cep", insertAdress);

console.log(`mensagem`)