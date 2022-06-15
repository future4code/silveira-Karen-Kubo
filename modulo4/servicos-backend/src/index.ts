import { insertAdress } from './endpoint/insertAddress';
import { AddressInfo } from "net";
import {app} from "./app";
import { getFullAddress } from "./endpoint/getFullAddress";
import { Request, Response } from 'express';


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.get("/address/:cep", getFullAddress);

app.post("/user/:cep", insertAdress);
