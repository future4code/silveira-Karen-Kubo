import { CustomError } from '../Errors/CustomError';
import { UserData, User } from './../Data/User';

export class UserBusiness {
    constructor(
        private userData:UserData
    ){};

    getUserProfile = async (id:string) => {

        if(!id) {
            throw new CustomError(422, `Por favor, informe o id corretamente nos parâmetros`);
        }

        const user = await this.userData.getInfo(id);
        if (!user) {
            throw new CustomError(404, "Usuário não encontrado");
        };

        return user;
    }

    getAllUsers = async (id:string) => {

        if(!id) {
            throw new CustomError(422, `Por favor, informe o id corretamente nos parâmetros`);
        }

        const user = await this.userData.getInfo(id);
        if (!user) {
            throw new CustomError(404, "Usuário não encontrado");
        };
        
        if(user.getRole() !== "ADMIN") {
            throw new CustomError(401, "Você não possui autorização para visualizar os usuários");
        };
        const users = await this.userData.getAllUsers();

        return users;
    }
}