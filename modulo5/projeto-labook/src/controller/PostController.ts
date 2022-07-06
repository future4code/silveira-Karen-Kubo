import { InputCreatePost } from './../types';
import { PostBusiness } from './../business/PostBusiness';
import { Request, Response } from 'express';

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {};
//POST
    post = async (req: Request, res: Response) => {
        const {photo, description, createdAt, type} = req.body;

        const token = req.headers.authorization as string;

        const input: InputCreatePost = {
            photo, 
            description, 
            createdAt, 
            type
        }

        try {
            const post = await this.postBusiness.post(input, token);
            res.status(201).send(post)

        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro no post`)
            }
        }
    };
//GET A POST
    getPost = async (req: Request, res: Response) => {
        const id = req.params.id as string;

        const token = req.headers.authorization as string;

        try {
            const post = await this.postBusiness.getPost(id, token)
            res.status(200).send(post);
        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro ao pegar o post`)
            }
        }
    };

    //GET A POST BY TYPE
    getPostByType = async (req: Request, res: Response) => {
        const type = req.body.type as string;

        const token = req.headers.authorization as string;

        try {
            const posts = await this.postBusiness.getPost(type, token)
            res.status(200).send(posts);
        } catch (error) {
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.status(500).send(`Erro ao pegar o post`)
            }
        }
    };

}