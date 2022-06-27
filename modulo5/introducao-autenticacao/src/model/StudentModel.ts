import { BaseDatabase } from "../data/baseDatabase";

export class StudentModel {
    constructor(private id: string){}
    public getId(): string {
        return this.id;
    }    
}