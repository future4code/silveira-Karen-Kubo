import { PurchasesFromUser } from './../types/types';
import { connection } from "../data/connection";
import { Request, Response } from "express";
import { Users } from "../types/types";

export const getPurchasesWithUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const result: Users[] = await connection(`labecommerce_purchases`)
            .join(`labecommerce_users as user`, `user_id`, `=`, `user.id`)
            .join(`labecommerce_products as product`, `product_id`, `=`, `product.id`)
            .select(`user.id as userId`, `user.name as userName`, `product.id as productId`, `product.name as productName`, `quantity`, `total_price`)

        res.status(200).send(result)
    } catch (error: any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({ message: err })
    }
}