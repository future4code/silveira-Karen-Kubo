import { postPurchaseFunction } from './../data/postPurchaseFunction';
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Users } from "../types/types";

export const postPurchase = async(req:Request, res:Response):Promise<any> => {
    let errorCode = 400;
    try {
        const result = await postPurchaseFunction(req.body)
        
        res.status(201).send(`Purchase created successfully!`)
    } catch (error:any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({message: err})
    }
}