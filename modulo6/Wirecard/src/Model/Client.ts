export class Client {
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private cpf:number,
        private password:string
    ){}

    public getId = ():string => {
        return this.id;
    };
    public getName = ():string => {
        return this.name;
    };
    public getEmail = ():string => {
        return this.email;
    };
    public getCPF = ():number => {
        return this.cpf;
    };
    public getPassword = ():string => {
        return this.password;
    };
}

export type InputSignUp = {
    name:string,
    email:string,
    cpf:number,
    password:string
}

export type InputLogin = {
    email:string,
    password:string
}

