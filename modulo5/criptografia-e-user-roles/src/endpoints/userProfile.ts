import { getUserById } from './../data/getUserById';
import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";

export const userProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const newAuthenticator = new Authenticator();

        const authenticationData = newAuthenticator.getData(token);

        if (authenticationData.role !== "normal") {
            throw new Error("Só um usuário consegue acessar essa informação!");
        }

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role,
        });
    } catch (err:any) {
        res.status(400).send({
            message: err.message,
        });
    }
};
