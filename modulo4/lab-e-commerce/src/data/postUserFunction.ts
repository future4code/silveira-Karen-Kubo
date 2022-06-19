import { connection } from './connection';
import { Users } from "../types/types";

export const postUserFunction = async (body:any) => {
    const {name, email, password} = body;
    
    await connection(`labecommerce_users`).insert({
        id: Date.now().toString(),
        name,
        email,
        password,
    })
} 