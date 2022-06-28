import { creatingUser } from './../data/creatingUser';
import { generateToken } from './../services/id';
import { Request, Response } from "express";
import { generateId } from "../services/id";

export const createUser = async (req:Request, res:Response):Promise<void> => {
    try {
    const {email, password} = req.body;

    if(!email || email.indexOf("@") === -1) {
        throw new Error ("Invalid email");
    }
    if(!password || password.length<6) {
        throw new Error ("Invalid password")
    }
    const userData = {
        email, 
        password
    };

    const id = generateId();

    await creatingUser(id, userData.email, userData.password);
    
    const token = generateToken({id});

    res.status(201).send({token});
        
    } catch (error:any) {
        let err = error.sqlMessage || error.sqlMessage
        res.status(400).send({
            message:err
        })
    }
    

}