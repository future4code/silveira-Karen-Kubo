import { connection, userTableName } from './../data/BaseDatabase';
import { generateToken } from './../services/id';
import { Request, Response } from "express";
import { generateId } from "../services/id";

export const getAllUsers = async (req:Request, res:Response):Promise<any> => {
    try {
    const {email} = req.params;

    if(!email || email.indexOf("@") === -1) {
        throw new Error ("Invalid email from params");
    }

    const result = await connection.select("*").from(userTableName).where({email});
    
    res.status(200).send({result});
    } catch (error:any) {
        let err = error.sqlMessage || error.sqlMessage
        res.status(400).send({
            message:err
        })
    }
    

}