export type Users = {
    id: string,
    name: string,
    email: string,
    password: string
    purchases?: PurchasesFromUser[]
}

export type Products = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type Purchases = {
    userId: string,
    productId: string,
    productName: string,
    quantity: number,
    total_price: number
}

export type PurchasesFromUser = {
    userId: string,
    userName: string,
    products: Purchases[]
}
