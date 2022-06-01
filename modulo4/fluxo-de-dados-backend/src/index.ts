import express from "express";
import cors from "cors";
import { Product, arrayProducts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/test", (req, res) => {
    res.status(200).send("A API está ativa")
})

app.post("/products", (req, res) => {
    try {
        const bodyName = String(req.body.name)
        const bodyPrice = Number(req.body.price)

        const newProduct: Product = {
            id: Date.now().toString(),
            name: bodyName,
            price: bodyPrice
        }
        if (!bodyName || !bodyPrice) {
            res.status(422).send("O nome ou o preço do produto não foram especificados")
        } else if (typeof bodyName !== "string" || typeof bodyPrice !== "number") {
            res.status(400).send("JSON inválido")
        } else if (bodyPrice <= 0) {
            res.status(422).send("O preço deve ser maior que 0")
        } else {
            arrayProducts.push(newProduct)
            res.status(200).send(arrayProducts)
        }
    } catch {
        if (res.statusCode === 200) {
            res.status(500).send("Erro inesperado")
        }
    }
})

app.get("/products", (req, res) => {
    res.status(200).send(arrayProducts)
})

app.put("produtos/:id", (req, res) => {
    const productId = req.params.id
    const newPrice = Number(req.body.price)
    try {
        if (!productId) {
            res.status(401).send("ID inexistente")
        } else {
            if (!newPrice) {
                res.status(400).send("O preço não foi declarado")
            } else if (typeof newPrice !== "number") {
                res.status(422).send("O preço declarado deve ser um número")
            } else if (newPrice <= 0) {
                res.status(422).send("O preço deve ser maior que 0")
            } else {
                const productModified = arrayProducts.map((prod) => {
                    if (productId === prod.id) {
                        prod.price = newPrice
                    }
                    return prod
                })
                if (productModified === arrayProducts) {
                    res.status(404).send("O produto não foi encontrado")
                } else {
                    res.status(200).send(arrayProducts)
                }
            }
        }
    }
    catch {
        if (res.statusCode === 200) {
            res.status(500).send("Erro inesperado")
        }
    }

})

app.delete("productos/:id", (req, res) => {
    try {
        const productId = req.params.id
        if (!productId) {
            res.status(401).send("ID inexistente")
        } else {
            const newArray = arrayProducts.filter((products) => {
                if (products.id !== productId) {
                    return products
                }
            })
            if (newArray.length > 0) {
                res.status(200).send(newArray)
            } else {
                res.status(404).send("Produto não encontrado")
            }

        }
    } catch {
        if (res.statusCode === 200) res.status(500).send("Erro inesperado")
    }

})


