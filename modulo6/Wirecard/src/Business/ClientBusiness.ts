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

            if (cpf.length !== 11) {
                throw new CustomError(401, "Por favor, informe apenas os números do CPF.")
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

            await this.clientData.createClient(client);

            const token = this.tokenGenerator.generate({ id, name });
            return token;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    createCard = async (token: string) => {
        try {
            if (!token) {
                throw new CustomError(422, "O token precisa ser passado como Authorization no headers");
            };

            const client = this.tokenGenerator.verify(token);
            if (!client) {
                throw new CustomError(404, `Cliente não encontrado!`);
            };
            const id = client.id;
            const clientName = await this.clientData.getClientById(client.id);
            const name = clientName.name;
            //cartao
            const generator = require('creditcard-generator')
            const [card] = await generator.GenCC();

            const today = new Date();
            const month = today.getMonth() + 1;
            const year = today.getFullYear() + 10;
            const expiration_date = `${month}/${year}`

            const cvv = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
            const hashCVV = await this.hashManager.hash(cvv);
            const newCard = new Card(
                id,
                name,
                card,
                expiration_date,
                hashCVV
            )
            await this.clientData.createCard(newCard);
            const generateToken = this.tokenGenerator.generate({ id: client.id, name:client.name, card:card, expiration_date:expiration_date, cvv:hashCVV });

            const infoCard = new Card(
                id,
                name,
                card,
                expiration_date,
                cvv
            );

            await this.clientData.createCardManagement(infoCard);

            const data = {
                generateToken,
                infoCard
            };
            return data;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    seeAllCards = async (token: string) => {
        try {
            if (!token) {
                throw new CustomError(422, "O token precisa ser passado como Authorization no headers");
            };

            const client = this.tokenGenerator.verify(token);
            if (!client) {
                throw new CustomError(404, `Cliente não encontrado!`);
            };
            const id = client.id;
            
            const cards = await this.clientData.seeCards(id);
            return cards;
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
            if (!compare) {
                throw new CustomError(404, `Credenciais inválidas`);
            }

            const token = this.tokenGenerator.generate({ id: client.id });

            const card = await this.clientData.getCardByHolderId(client.id);
            if (!card) {
                return token;
            } else {
                const data = {
                    token,
                    card
                };

                return data;
            }
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}