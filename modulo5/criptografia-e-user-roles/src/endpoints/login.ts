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