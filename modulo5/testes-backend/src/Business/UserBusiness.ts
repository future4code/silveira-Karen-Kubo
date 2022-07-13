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
}