Round é o número que irá definir a segurança da senha (custo - numérico) e salt é uma string aleatória na senha. Utiliza-se o n° 12 como padrão.

import * as bcrypt from "bcryptjs";

export class HashManager {
    hash = async (s: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result;
    }

    compare = async (s: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(s, hash);
    }
}

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

import { getUserByEmail } from './../data/getUserByEmail';
import { HashManager } from './../services/HashManager';
import { generateId, token } from './../id';
import { Request, Response } from "express";
import { connection } from '../data/BaseConnection';
import Authenticator from '../services/Authenticator';
import { authenticationData } from '../types';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Email inválido");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };
  
      const [user] = await getUserByEmail(userData.email);
      
      const hashManager:HashManager = new HashManager();

      const compareResult = await hashManager.compare(
        userData.password,
        user.password
      );

      if(!user || !compareResult) {
        throw new Error (`Credenciais inválidas`)
      }
  
      
      const newAuthenticator = new Authenticator;
      const token = newAuthenticator.generateToken({
        id: user.id,
        role: user.role    
          });
  
      res.status(200).send({
        token
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };
