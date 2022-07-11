import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";
import { authenticationData } from "./types";

export const generateId = ():string => {
    return v4();
}

const expiresIn = "1h";

export class token {
    generateToken = (input:authenticationData):string => {
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        )
    }
    getTokenData = (token:string):authenticationData|null=>{
        try {
            const {id} = jwt.verify(
                token, String(process.env.JWT_KEY)) as authenticationData
                return {id}
        } catch (error) {
            return null;
        }
    }
}

