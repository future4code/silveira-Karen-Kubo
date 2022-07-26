import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

//1a
export interface User {
    name: string,
    balance: number
}
//1b
export const purchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface newUser {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}

export function verifyAge(casino: Casino, users: newUser[]) {
    const allowed: newUser[] = [];
    const unallowed: newUser[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }