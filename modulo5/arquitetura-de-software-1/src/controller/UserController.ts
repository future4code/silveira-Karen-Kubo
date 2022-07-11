import { USER_ROLES } from '../model/user';
import { UserBusiness } from '../business/UserBusiness';
import { Request, Response } from 'express';
import * as userBusiness from '../business/UserBusiness'

export async function signup(req: Request, res: Response) {
    try {
        const input = {
            email: req.body.email as string,
            name: req.body.name as string,
            password: req.body.password as string,
            role: req.body.role as USER_ROLES
        }
        const user_Business = new UserBusiness;
        const token = await user_Business.createUser(input);

        res.status(200).send({ token });

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }

}


export async function get(req: Request, res: Response) {

    try {
        const token = req.headers.authorization!;
        const user_Business = new UserBusiness;
        const users = await user_Business.get(token);

        res.send(users).status(200);

    } catch (error: any) {
        res.send({ message: error.message }).status(error.status);
    }
}

export async function login(req: Request, res: Response) {

    try {

        const loginData = {
            email: req.body.email as string,
            password: req.body.password as string
        };

        const user_Business = new UserBusiness;
        const token = await user_Business.getUserByEmail(loginData);

        res.status(200).send({ token });

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
}

export async function deleteUser(req: Request, res: Response) {


    try {
        const input = {
            id: req.params.id,
            token: req.headers.authorization!
        }
        const user_Business = new UserBusiness;
        await user_Business.deleteUser(input);

        res.status(200).send({ message: "Usuário apagado com sucesso" });

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }

}
