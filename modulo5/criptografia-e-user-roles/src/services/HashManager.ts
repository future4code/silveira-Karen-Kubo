import * as bcrypt from "bcryptjs";

export class HashManager {
    hash = async (s: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const round = 12;
        const salt = await bcrypt.genSalt(round);
        const cypherText = await bcrypt.hash(s, salt);
        return cypherText;
    }

    compare = async (plainText: string, cypherText: string): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText);
    }
}
