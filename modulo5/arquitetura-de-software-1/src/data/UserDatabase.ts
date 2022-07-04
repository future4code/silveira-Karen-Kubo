import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {
    public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
            role: string //opcional criar ENUM
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

    
}