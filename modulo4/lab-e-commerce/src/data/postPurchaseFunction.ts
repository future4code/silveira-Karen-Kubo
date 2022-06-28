import { connection } from './connection';

export const postPurchaseFunction =async (body:any) => {
    const {user_id, product_id, quantity} = body;
    const getTotalPrice = await connection(`labecommerce_products`).select(`price`).where({id: product_id});
    const total_price = getTotalPrice[0].price*quantity;

    const purchases = await connection(`labecommerce_purchases`)
    .join(`labecommerce_users as user`, `user_id`, `=`, `user.id`)
    .join(`labecommerce_products as product`, `product_id`, `=`, `product.id`)
    .select(`user.id`, `user.name`, `user.email`, `user.password`, `product.name`, `quantity`, `total_price`)

    await connection(`labecommerce_users`).insert({
        purchases: purchases
    })

    await connection(`labecommerce_purchases`).insert({
        id: Date.now().toString(),
        user_id,
        product_id,
        quantity,
        total_price
    })
}