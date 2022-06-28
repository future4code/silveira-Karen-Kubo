import { HashManager } from './../services/HashManager';
import { generateId, token } from './../id';
import { Request, Response } from "express";
import { connection } from '../data/BaseConnection';
import Authenticator from '../services/Authenticator';
import { authenticationData } from '../types';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password) {
            throw new Error (`As credenciais não foram passadas!`)
        }

        const userData = {
            email,
            password,
            role
        }

        const id = generateId();

        const newHash = new HashManager();

        const hashPassword = await newHash.hash(userData.password);

        await connection().insert({ id, email: userData.email, password: hashPassword }).into(`User`);
        //informações pra guardar do usuário
        const payload: authenticationData = {
            id,
            role: userData.role
        };

        const newAuthenticator = new Authenticator();

        const token = newAuthenticator.generateToken(payload);

        res.status(200).send({ token })

    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}