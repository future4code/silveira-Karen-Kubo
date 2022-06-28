import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";

export function generateId(): string {
    return v4();
}

const expiresIn = "2min";
type authenticationData = {
    id:string;
}
export const generateToken = (input: authenticationData): string => {
    const token = jwt.sign({id: input.id},
        process.env.JWT_KEY as string,
        {expiresIn});

        return token;
}
export const getData = (token:string):authenticationData=>{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id
    }
    return result;
}
