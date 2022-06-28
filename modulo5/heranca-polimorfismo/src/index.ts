import { Client, Customer, Place, User } from './Types/types';
import { app } from "./app";
//Heranca
// 1a) Não, pois não há uma função public que disponibilize a senha;
// 1b) 1
const karen = new User(Date.now().toString(), "karen@karen.com", "Karen", "teste")
console.log(karen.getEmail(), karen.getId(), karen.getName());
//2a) 2
//2b) 1
const newKaren = new Customer("id: string", 'email: string', "name: string", "password: string", "creditCard: string")
console.log(newKaren)
// 3a) Porque é um valor privado que não tem um método público disponibilizando o dado.
console.log(newKaren.getId(), newKaren.getName(), newKaren.getEmail(), newKaren.getCreditCard(), newKaren.purchaseTotal)

//4 e 5)
console.log(newKaren.introduceYourself())

//Polimorfismo
//1a) todas as informações foram acessadas porque a interface não possibilita privar os dados.
const gasparzinho: Client = {
    name: "Gasparzinho",
    registrationNumber: 1,
    consumedEnergy: 500,
  
    calculateBill: () => {
      return 90;
    }
  }
console.log(gasparzinho.name, gasparzinho.consumedEnergy, gasparzinho.registrationNumber, gasparzinho.calculateBill())

//2a) Cannot create an instance of abstract class.
// const newPlace = new Place();
//2b) ter uma classe filha que o referencie

//3)a) ter uma classe filha que referencie o elemento sem ser abstract
//3)b) Porque os dados precisam estar como 'protected'.
//3c) Porque está representando um tipo de informação que simplesmente abstrai e armazena as características em comum de um conjunto de outras classes.

