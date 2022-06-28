import axios from "axios";
import { Request, Response } from "express";
import { title } from "process";
import app from "./app";
import connection from "./connection";
import { BASE_URL } from "./url";

type User = {
    id: string;
    name: string;
    email: string;
}

//Exercício 1
// a) get
// b) Promise<any[]>
// c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    console.log(response.data)
    return response.data;
}

// Exercício 2
// a) O async na função nomeada vai no início, enquanto o async da arrow function é colocada antes do parâmetro.
// b
// const getSubscribersArrowFunction = async (): Promise<any[]> => {
//     const response = await axios.get(`${BASE_URL}/subscribers`);
//     console.log(response.data)
//     return response.data;
// };
// getSubscribersArrowFunction();

// Exercício 3
//a) Não, porque as informações vêm nesse formato.
//b) Porque não sabemos o formato que as informações virão.
// c) 
const getSubscribersArrowFunction = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
};

// Exercício 4
// a) PUT, porque ele pode tanto publicar quanto atualizar uma notícia.
// b)
const publishNews = async (title: string, content: string, date: number): Promise<void> => {
    await axios.put(`${BASE_URL}/news`, {
        title: title,
        content: content,
        date: date
    });
}

// Exercício 5
const notifyUsers = async (users: User[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log(`Notification to ${user.name} sent`)
        }
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

// Exercício 6
// a) Esse método recebe um array de Promises e retorna outra Promise, que resolve em um array de respostas.
// b) Melhora na performance
const notifyUsersPromiseAll = async (users: User[], message: string): Promise<void> => {
    try {
        const requests = users.map ((user) => {
            axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log(`Notification to ${user.name} sent`)
        })
        await Promise.all(requests)
    }
    catch (err: any) {
        const res = err.response?.data || err.message;
        console.log(res)
    }
}

const main = async (): Promise<void> => {
    try {
        const subscribers = await getSubscribers();
        await publishNews("Title", "Content", 13062022);
        await notifyUsers(subscribers, "Verifique o nosso novo post!");        
    } catch (error:any) {
        const res = error.response?.data || error.message;
        console.log(res)
    }
}
main();

// Desafio
function hello () {
    console.log(`Oi :D`)
}

const challenge = async():Promise<any> => {
    return new Promise (() => {
        setTimeout(hello, 5000);
    })
}
challenge();