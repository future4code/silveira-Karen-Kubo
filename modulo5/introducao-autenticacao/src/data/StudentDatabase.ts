import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./baseDatabase";

export class StudentDatabase extends BaseDatabase {
    public async getAll() {
        try {
            const result = await BaseDatabase.connection(`table`).select(`*`);
            return result;
        } catch (error: any) {
            let err = error.sqlMessage || error.message
            throw new Error(err)
        }
    }
    public async insert(student: StudentModel) {
        try {
            await BaseDatabase.connection(`table`).insert({
                id: student.getId()
            })
        } catch (error: any) {
            throw new Error()
        }
    }
}