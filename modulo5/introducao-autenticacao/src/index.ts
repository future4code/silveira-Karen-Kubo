import { getUserById } from './endpoints/getUserById';
import { getAllUsers } from './endpoints/getAllUsers';
import { createUser } from './endpoints/createUser';
import { Request, Response } from "express";
import { app } from "./app";

app.post (`/user/signup`, createUser);
app.get (`/user/login`, getAllUsers);
app.get (`/user/profile`, getUserById)
//1a) Strings abrem o leque de possibilidades para tornar o código mais seguro;

//1b) código está na pasta services;

//2a) O código acima cria a base para criar um usuário.

//2b e 2c) 

  //3a) Ela define o tipo da key que inicialmente é any como string;

  //3b) está no endpoint id.ts;
  