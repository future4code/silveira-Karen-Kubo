import { BaseDatabase } from "./BaseDatabase";
import { Client } from './../Model/Client';
import { CustomError } from './../Error/CustomError';
import { Card } from './../Model/Card';

export class ClientData extends BaseDatabase {
    private tableNameClient = "Wirecard_Client";
    private tableNameCard = "Wirecard_Card";

    createClient =async (client:Client) => {
        try {
            await ClientData.connection()
            .insert({
                id: client.getId(),
                name: client.getName(),
                email: client.getEmail(),
                cpf: client.getCPF(),
                password: client.getPassword()
            })
            .into(this.tableNameClient)
            
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    createCard = async (card:Card) => {
        try {
            await ClientData.connection()
            .insert({
                card_holder_id: card.getCardHolderId(),
                card_holder_name: card.getCardHolderName(),
                number: card.getCard(),
                expiration_date: card.getExpirationDate(),
                cvv: card.getCVV()
            })
            .into(this.tableNameCard)
            
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getCard = async(number:string) => {
        try {
            const [card] = await ClientData.connection(this.tableNameCard)
            .select()
            .where({number})
            return card;
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getCardByHolderId = async(card_holder_id:string) => {
        try {
            const [card] = await ClientData.connection(this.tableNameCard)
            .select()
            .where({card_holder_id})
            return card;
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getAllClients =async () => {
        try {
            const clients = await ClientData.connection(this.tableNameClient)
            .select()  
            return clients;         
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getClientById =async (id:string) => {
        try {
            const client = await ClientData.connection(this.tableNameClient)
            .select()
            .where({id})  
            return client[0];         
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getClientByCPF = async (cpf:number) => {
        try {
            const client = await ClientData.connection(this.tableNameClient)
            .select()
            .where({cpf})  
            return client[0];         
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    getClientByEmail = async (email:string) => {
        try {
            const client = await ClientData.connection(this.tableNameClient)
            .select()
            .where({email})  
            return client[0];         
        } catch (error:any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}