import { RecipeDatabase } from './../data/RecipeDatabase';
import { HashManager } from './../services/HashManager';
import { IdGenerator } from "../services/idGenerator";
import {Request, Response} from "express";
import { Authenticator } from '../services/Authenticator';
import { Recipe } from '../model/Recipe';

export async function createRecipe(req:Request, res:Response) {
    let errorCode:number = 400;
    try {
        const {title, description} = req.body;
        const token = req.headers.authorization;

        if(!token) {
            errorCode=422;
            throw new Error(`O endpoint exige uma autorização nos headers`)
        }

        const authenticator = new Authenticator();
        const data = authenticator.getTokenData(token);

        if(!data) {
            errorCode=401;
            throw new Error(`Usuário não encontrado!`)
        }

        if (!title || !description) {
            errorCode=422;
            throw new Error(`Insira as informações corretamente de 'title' e 'description'`);
        }

        //Gerando id para a receita
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();
        //Verificando data de criacao
        const createdAt = new Date(Date.now());
        //Criando variável de receita e enviando para o banco de dados
        const newRecipe = new Recipe(id, title, description, createdAt)
        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.createUser(newRecipe)

        res.status(201).send({message: "Receita criada com sucesso", recipe: newRecipe})
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}