import { getData } from './../services/id';
import { Request, Response } from "express";
import { getUser } from '../data/getUser';

export const getUserById = async (req:Request, res:Response) => {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUser(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    } catch (error:any) {
        let err = error.sqlMessage || error.sqlMessage
        res.status(400).send({
            message:err
        })
    }
}