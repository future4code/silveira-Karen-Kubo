import express, { Request, Response } from "express";
import cors from "cors";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type Users = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const users:Users[] = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "kale.biz",

      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "ambrose.net"
      }
]
//Criando um array de posts fora do usuário, pois posts será utilizado no method post
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const posts:Post[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 3,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 5,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
]

app.get("/users", (request:Request, response:Response) => {
    response.send(users)
})

app.get("/posts", (request:Request, response:Response) => {
    response.send(posts)
})

app.get("/posts/:userId", (request:Request, response:Response) => {
    const postsUser = posts.filter((post) => {
        if (post.userId === Number(request.params.userId)) {
            return post
        }
    })
    response.send(postsUser)
})

app.delete("/posts/:id", (request:Request, response:Response) => {
    const postsDeleted = posts.filter((post) => {
        if (post.id !== Number(request.params.id)) {
            return post
        }
    })
    response.send(postsDeleted)
})

app.delete("/users/:id", (request:Request, response:Response) => {
    const userDeleted = users.filter((user) => {
        if (user.id !== Number(request.params.id)) {
            return user
        }
    })
    response.send(userDeleted)
})



