import { app } from "./Controller/app";
import { ClientBusiness } from './Business/ClientBusiness';
import { ClientData } from "./Data/ClientData";
import { IdGenerator } from "./Services/IdGenerator";
import { TokenGenerator } from "./Services/TokenGenerator";
import { HashManager } from "./Services/HashManager";
import { ClientController } from './Controller/ClientController';
import { TransactionBusiness } from './Business/TransactionBusiness';
import { TransactionData } from "./Data/TransactionData";
import { TransactionController } from './Controller/TransactionController';
//Cliente
const clientBusiness = new ClientBusiness(
    new ClientData(),
    new IdGenerator(),
    new TokenGenerator(),
    new HashManager()
);

const clientController = new ClientController(
    clientBusiness
);

app.post("/user/signup", clientController.signUp);
app.post("/user/login", clientController.login);
app.post("/user/card", clientController.createCard);
app.get("/user/card", clientController.seeInfoFromCards);
//Pagamentos
const transactionBusiness = new TransactionBusiness(
    new TransactionData(),
    new TokenGenerator(),
    new HashManager(),
    new ClientData()
);

const transactionController = new TransactionController(
    transactionBusiness
);

app.post("/payment", transactionController.createPayment);
app.get("/payment", transactionController.getPaymentsFromUser);