import { Products } from './../types/types';
import { connection } from "../data/connection";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        let order = req.query.order as string;
        let search = req.query.search as string;
        if (order && search) {
            if (order === "ASC" || order.toUpperCase() === "DESC") {
                const result: Products[] = await connection(`labecommerce_products`).select(`*`).where(`name`, `like`, `%${search}%`).orderBy(order)
                if (result.length === 0) {
                    throw new Error(`No products were found`)
                }
                res.status(200).send(result)
            } else if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
                const result: Products[] = await connection(`labecommerce_products`).select(`*`).where(`name`, `like`, `%${search}%`)
                if (result.length === 0) {
                    throw new Error(`No products were found`)
                }
                res.status(200).send(result)
            }
        } else if (order && !search) {
            if (order.toUpperCase() === "ASC" || order.toUpperCase() === "DESC") {
                const result: Products[] = await connection(`labecommerce_products`).select(`*`).orderBy(order)
                if (result.length === 0) {
                    throw new Error(`No products were found`)
                }
                res.status(200).send(result)
            } else if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
                const result: Products[] = await connection(`labecommerce_products`).select(`*`)
                if (result.length === 0) {
                    throw new Error(`No products were found`)
                }
                res.status(200).send(result)
            }
        } else if (!order && search) {
            const result: Products[] = await connection(`labecommerce_products`).select(`*`).where(`name`, `like`, `%${search}%`)
            if (result.length === 0) {
                throw new Error(`No products were found`)
            }
            res.status(200).send(result)
        } else {
            const result: Products[] = await connection(`labecommerce_products`).select(`*`)
            if (result.length === 0) {
                throw new Error(`No products were found`)
            }
            res.status(200).send(result)
        }
    } catch (error: any) {
        let err = error.sqlMessage || error.message
        res.status(400).send({ message: err })
    }
}