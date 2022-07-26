import { InputLogin, InputSignUp } from '../Model/Client';
import { ClientData } from './../Data/ClientData';
import { CustomError } from './../Error/CustomError';
import { IdGenerator } from './../Services/IdGenerator';
import { Client } from './../Model/Client';
import { TokenGenerator } from './../Services/TokenGenerator';
import { HashManager } from './../Services/HashManager';
import { Card } from '../Model/Card';

export class ClientBusiness {
    constructor(
        private clientData: ClientData,
        private idGenerator: IdGenerator,
        private tokenGenerator: TokenGenerator,
        private hashManager: HashManager
    ) { }

    signUp = async (input: InputSignUp) => {
        try {
            //criando usuário
            const { name, email, cpf, password } = input;
            if (!name || !email || !cpf || !password) {
                throw new CustomError(422, "Nome, email e o cpf precisam ser informados no body!")
            }

            if (password.length <= 10) {
                throw new CustomError(401, "Password precisa ter mais que 10 caracteres.")
            }

            if (isNaN(cpf) || cpf.toString().length !== 11) {
                throw new CustomError(401, "CPF é um número. Por favor o informe apenas com números.")
            }

            const verifyEmail = await this.clientData.getClientByEmail(email);
            const verifyCPF = await this.clientData.getClientByCPF(cpf);
            if (verifyEmail || verifyCPF) {
                throw new CustomError(401, "Esse CPF ou E-mail já está registrado no nosso sistema!")
            }

            const id = this.idGenerator.generate();
            const hashPassword = await this.hashManager.hash(password);

            const client = new Client(
                id,
                name,
                email,
                cpf,
                hashPassword
            );
            console.log(client)

            await this.clientData.createClient(client);
            
            //cartao
            const generator = require('creditcard-generator')
            const [card] = await generator.GenCC();

            const today = new Date();
            const day = today.getDay();
            const month = today.getMonth() + 1;
            const year = today.getFullYear() + 10;
            const expiration_date = new Date(year, month, day);

            const cvv = Math.floor(Math.random() * (999 - 100 + 1) + 100);

            const newCard = new Card(
                id,
                name,
                card,
                expiration_date,
                cvv
            )
            console.log(newCard)
            await this.clientData.createCard(newCard);

            const token = this.tokenGenerator.generate({ id, name, card, expiration_date, cvv });
            const data = {
                token,
                newCard
            }
            

            return data;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    login = async (input: InputLogin) => {
        try {
            const { email, password } = input;
            if (!email || !password) {
                throw new CustomError(401, `Email e password precisam ser informados no body para o login!`);
            };
            const client = await this.clientData.getClientByEmail(email);
            if (!client) {
                throw new CustomError(404, `Usuário não encontrado!`);
            }
            const compare = await this.hashManager.compareHash(password, client.password);
            if(!compare) {
                throw new CustomError(404, `Credenciais inválidas`);
            }
            
            const token = this.tokenGenerator.generate({id: client.id});

            const card = await this.clientData.getCardByHolderId(client.id);

            const data = {
                token,
                card
            };

            return data;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}