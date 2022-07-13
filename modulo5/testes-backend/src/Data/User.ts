import { connection } from './../connection';

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private role: USER_ROLES) { }

    getId = ():string => {
        return this.id;
    };
    getName = ():string => {
        return this.name;
    };
    getEmail = ():string => {
        return this.email;
    };
    getRole = ():USER_ROLES => {
        return this.role;
    };
}

export class UserData {
    getInfo = async (id: string): Promise<User|undefined> => {
        const [user]:User[] = await connection(`User_Arq`)
            .select(`*`)
            .where({ id });

        return user;
    }

    getAllUsers = async (): Promise<User[]|undefined> => {
        const users = await connection(`User_Arq`)
            .select(`*`);

        return users;
    } 
}