import { connection } from './connection';
import { Products } from "../types/types";

export const postProductsFunction = async (body:any) => {
    const {name, price, image_url} = body;

    await connection(`labecommerce_products`).insert({
        id: Date.now().toString(),
        name,
        price,
        image_url
    })
} 