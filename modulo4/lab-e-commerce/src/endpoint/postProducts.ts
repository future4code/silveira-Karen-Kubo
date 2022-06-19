import { postProductsFunction } from './../data/postProductsFunction';
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Users } from "../types/types";


export const postProducts = async(req:Request, res:Response):Promise<any> => {
    let errorCode = 400;
    try {
        const {name} = req.body

        const result = await postProductsFunction(req.body)
        
        res.status(201).send(`Product ${name} created successfully!`)
    } catch (error:any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({message: err})
    }
}