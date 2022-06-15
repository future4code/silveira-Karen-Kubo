import { getFullAddress } from './getFullAddress';
import { insertAddressBody } from './../data/insertAddressBody';
import { connection } from './../data/connection';
import axios from "axios"
import { Address } from "../types/Address"
import { Request, Response } from 'express';

export const insertAdress = async (req: Request, res: Response) => {
    try{
        const cep = req.params.cep;
        const numero = Number(req.query.numero);
        const complemento = req.params.complemento as string|undefined;
              
        const address = await getFullAddress(cep);

        if(!address){
            throw new Error("Invalid CEP!")
        }
        if(!numero || isNaN(numero)) {
            throw new Error ("Please, send a number in the query section to validate your address.")
        }
        
        await insertAddressBody(cep, address, numero, complemento)

        res.status(201).send("Endereco criado com sucesso")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}