import { connection } from './BaseConnection';
export const getUserByEmail = async (email:string):Promise<any> => {
    const user = await connection(`User`).select(`*`).where({email});

    return user
}