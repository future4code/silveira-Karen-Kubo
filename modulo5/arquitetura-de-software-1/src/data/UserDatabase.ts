import { USER_ROLES } from './../model/user';
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {
    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: USER_ROLES
      ): Promise<void> {
        try {
          await BaseDatabase.connection()
            .insert({
              id,
              email,
              name,
              password,
              role
            })
            .into('User_Arq');
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }

      async get(): Promise<any[]> {
        try {
            const users: any = [];

            const result = await BaseDatabase.connection()
                .select("*")
                .from('User_Arq');

						for(let user of result){
								users.push(user);
						}

            return users;

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getUserByEmail(email: string): Promise<any> {
      try {
  
        const result = await BaseDatabase.connection()
          .select("*")
          .from('User_Arq')
          .where({ email });
        if(!result[0]){
          throw new Error("Usuário não encontrado");
        }
        return result[0];
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public async deleteUser(
      id: string
    ): Promise<void> {
      try {
        await BaseDatabase.connection()
          .where({ id })
          .from('User_Arq')
          .del()
          
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
}