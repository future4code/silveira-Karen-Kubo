import { connection } from './BaseConnection';
export const getUserById = async (id:string):Promise<any> => {
    const user = await connection(`User`).select(`*`).where({id});

    return user
}