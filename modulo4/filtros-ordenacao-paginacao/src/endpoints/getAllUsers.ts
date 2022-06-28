import { connection } from './../connection';
import { Response, Request } from "express"
import selectAllUsers from "../data/functions"

//id, name, email, type
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//    let errorCode: number = 400;
//    try {
//       const users = await selectAllUsers()

//       if (!users.length) {
//          res.statusCode = 404
//          throw new Error("No users found")
//       }


//       res.status(200).send(users)

//    } catch (error) {
//       let erro = error as any;
//       let err = erro.message || erro.sqlMessage
//       res.status(errorCode).send(err)
//    }
// }

//exercício 1a
export const getAllUsersSortByName = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400;
   try {
      const name = req.query.name;

      const users = await connection("aula49_exercicio")
         .where('name', 'LIKE', `%${name}%`)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }


      res.status(200).send(users)

   } catch (error) {
      let erro = error as any;
      let err = erro.message || erro.sqlMessage
      res.status(errorCode).send(err)
   }
}

//exercício 1b
export const getAllUsersSortByType = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400;
   try {
      const type = req.params.type;

      const users = await connection("aula49_exercicio")
         .where({ type: type })

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }


      res.status(200).send(users)

   } catch (error) {
      let erro = error as any;
      let err = erro.message || erro.sqlMessage
      res.status(errorCode).send(err)
   }
}

//exercício 2 - adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.
export const getAllUsersOrder = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400;
   try {
      let sort = req.query.sort as string
      let order = req.query.order as string
      order = order.toUpperCase();

      if (!sort && !order) {
         let sort = "email";
         let order = "ASC";
         const users = await connection("aula49_exercicio")
            .orderBy(sort, order);
         res.status(200).send(users)
      } else if (sort && !order) {
         let order = "ASC";
         const users = await connection("aula49_exercicio")
            .orderBy(sort, order);
         res.status(200).send(users)
      } else if (!sort) {
         let sort = "email";
         const users = await connection("aula49_exercicio")
            .orderBy(sort, order);
         res.status(200).send(users)
      }

      const users = await connection("aula49_exercicio")
         .orderBy(sort, order)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }


      res.status(200).send(users)

   } catch (error) {
      let erro = error as any;
      let err = erro.message || erro.sqlMessage
      res.status(errorCode).send(err)
   }
}

// Exercício 3 - Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver. O número da página deve ser passado por query params.
export const getFiveUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400;
   try {
      let page = Number(req.query.page);
      if (page < 1 || isNaN(page)) {
         page = 1
      }
      let size = 5;
      let offset = size * (page - 1);

      const users = await connection("aula49_exercicio")
         .limit(size)
         .offset(offset)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }


      res.status(200).send(users)

   } catch (error) {
      let erro = error as any;
      let err = erro.message || erro.sqlMessage
      res.status(errorCode).send(err)
   }
}

// Exercício 4 - Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:
// - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
// - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
// - Caso o usuário não forneça número de página, deve começar na página 1

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode: number = 400;
   try {
      const name = req.query.name;
      let type = req.params.type;
      let sort = req.query.sort as string
      let order = req.query.order as string

      let page = Number(req.query.page);
      if (page < 1 || isNaN(page)) {
         page = 1
      }
      let size = 5;
      let offset = size * (page - 1);

      if (!name && !type) {
         const users = await connection("aula49_exercicio")

         res.status(200).send(users)
      }
      if (!sort && !order) {
         let sort = "name";
         let order = "DESC";
         const users = await connection("aula49_exercicio")
            .where('name', 'LIKE', `%${name}%`)
            .where({ type: type })
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)
         res.status(200).send(users)
      } else if (sort && !order) {
         let order = "DESC";
         const users = await connection("aula49_exercicio")
            .where('name', 'LIKE', `%${name}%`)
            .where({ type: type })
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)
         res.status(200).send(users)
      } else if (!sort && order) {
         let sort = "name";
         order.toUpperCase();
         const users = await connection("aula49_exercicio")
            .where('name', 'LIKE', `%${name}%`)
            .where({ type: type })
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)
         res.status(200).send(users)
      }



      const users = await connection("aula49_exercicio")
         .where('name', 'LIKE', `%${name}%`)
         .where({ type: type })
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)


      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }


      res.status(200).send(users)

   } catch (error) {
      let erro = error as any;
      let err = erro.message || erro.sqlMessage
      res.status(errorCode).send(err)
   }
}