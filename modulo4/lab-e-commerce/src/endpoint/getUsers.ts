import { PurchasesFromUser } from './../types/types';
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Users } from "../types/types";

export const getUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const result: Users[] = await connection(`labecommerce_users`)
            .select(`*`)

        res.status(200).send(result)
    } catch (error: any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({ message: err })
    }
}