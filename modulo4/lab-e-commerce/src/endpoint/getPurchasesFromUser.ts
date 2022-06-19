import { Purchases } from './../types/types';
import { connection } from "../data/connection";
import { Request, Response } from "express";

export const getPurchases = async (req: Request, res: Response): Promise<any> => {
    try {
        const {user_id} = req.params;

        const result = await connection(`labecommerce_purchases`)
        .join(`labecommerce_users as user`, `user_id`, `=`, `user.id`)
        .join(`labecommerce_products as product`, `product_id`, `=`, `product.id`)
        .select(`user.name`, `product.name`, `quantity`, `total_price`)

        if (result.length === 0) {
            throw new Error(`No purchases were found from this user`)
        }
        res.status(200).send(result)


    } catch (error: any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({ message: err })
    }
}