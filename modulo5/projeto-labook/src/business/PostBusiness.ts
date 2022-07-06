import { Post } from './../model/Post';
import { PostData } from './../data/PostData';
import { InputCreatePost } from './../types';
import { Authenticator } from './../services/Authenticator';
import { HashManager } from './../services/HashManager';
import { IdGenerator } from './../services/IdGenerator';


export class PostBusiness {
    constructor(
        private postData:PostData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}
//POST
    post = async(inputCreatePost:InputCreatePost, token:string|undefined) => {
        const {photo, description, createdAt, type} = inputCreatePost;

        if (!photo || !description || !createdAt) {
            throw new Error (`Preencha os campos corretamente!`)
        }
        if(type.toUpperCase() !== "NORMAL" && type.toUpperCase() !== "EVENTO") {
            throw new Error (`Preencha type corretamente como: NORMAL ou EVENTO`)
        }

        if (!token || token===undefined) {
            throw new Error(`Preencha o authorization corretamente nos headers`)
        }

        const authorId = this.authenticator.getData(token);
        if(!authorId) {
            throw new Error (`Usuário não existe`)
        }
        
        const date = createdAt.split("/")
        const formatDate = date[1]+'-'+date[0]+'-'+date[2]
        const newCreatedAt = new Date(formatDate)

        const id = this.idGenerator.generateId();

        const post = new Post (
            id,
            photo,
            description,
            newCreatedAt,
            type,
            authorId.id
        )

        await this.postData.insert(post);

        return post;
    }
//PEGAR UM POST PELO ID
    getPost = async(id:string, token:string|undefined) => {
        
        if (!id) {
            throw new Error (`Preencha o id corretamente nos parâmetros!`)
        }

        if (!token || token===undefined) {
            throw new Error(`Preencha o authorization corretamente nos headers`)
        }

        const userId = this.authenticator.getData(token);
        if(!userId) {
            throw new Error (`Usuário não existe`)
        }
        
        const post = await this.postData.findPostById(id);
        if (!post) {
            throw new Error(`Post não encontrado`)
        }

        return post;
    }
//PEGAR UM POST PELO TYPE
getPostByType = async(type:string, token:string|undefined) => {
        
    if (!type) {
        throw new Error (`Preencha o id corretamente no body!`)
    }

    if (!token || token===undefined) {
        throw new Error(`Preencha o authorization corretamente nos headers`)
    }

    const userId = this.authenticator.getData(token);
    if(!userId) {
        throw new Error (`Usuário não existe`)
    }
    
    const posts = await this.postData.getPostsByType(type);

    if (posts.length===0) {
        throw new Error(`Posts do tipo ${type} não foram encontrados.`)
    }

    return posts;
}
}