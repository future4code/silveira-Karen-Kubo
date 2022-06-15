import { Address } from './../types/Address';
import express from 'express';
import { connection } from './connection';
import { Request, Response } from 'express';


export const insertAddressBody = async (cep:string, address:Address, numero:number, complemento:string|undefined) => {
    const {logradouro, bairro, cidade, estado} = address;

    await connection(`address`).insert({cep, logradouro, numero, complemento, bairro, cidade, estado})
}