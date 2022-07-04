import { USER_ROLES } from '../model/user';
import { createUser } from '../business/createUser';
import { Request, Response } from 'express';
import * as userBusiness from '../business/createUser'

export async function signup(req: Request, res: Response) {
        
        try {
            const input = {
                email: req.body.email as string,
                name: req.body.name as string,
                password: req.body.password as string,
				role: req.body.role as USER_ROLES
            }
            const UserBusiness = new createUser;
            const token = await UserBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

    }