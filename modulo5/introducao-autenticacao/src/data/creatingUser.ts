import { connection, userTableName } from './BaseDatabase';
export const creatingUser = async (id: string, 
    email: string, 
    password: string) => {
    await connection.insert({id, email, password}).into(userTableName)
}