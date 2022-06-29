import { User } from './../model/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(`USER`).select(`*`).where({ email })

            return user[0] && User.toUserModel(user[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection(`USER`).insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllUsers():Promise<User[]>{
        try {
            const users = await BaseDatabase.connection(`USER`).select('id', 'name', 'email', 'role');
            return users.map(user=>User.toUserModel(user));
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
        
    }

    public async getUser(id:string):Promise<User[]>{
        try {
            const user = await BaseDatabase.connection(`USER`).select('id', 'name', 'email').where({id});
            return user.map(user=>User.toUserModel(user));
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
        
    }
}