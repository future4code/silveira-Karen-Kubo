//1) a) Podemos ter ações que devem ser executadas ao criar uma instância da classe
// b) constructor(){}
// c) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this)
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

// 2) 
  class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
      }
    
      public getDate ():string {
        return this.date;
      }
      public getValue ():number {
        return this.value;
      }
      public getDescription ():string {
        return this.description;
      }
  }
//3)
  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }