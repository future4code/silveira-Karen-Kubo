import { Post } from './../model/Post';
import { BaseDatabase } from "./BaseData";

export class PostData extends BaseDatabase {
    protected table_name = "labook_posts"

    insert = async (post: Post): Promise<void> => {
        try {
            await PostData
                .connection(this.table_name)
                .insert(post)
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }

    findPostById = async (id: string) => {
        try {
            const account = await PostData
                .connection(this.table_name)
                .select()
                .where({ id })
            return account;
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }

    getPostsByType = async (type: string) => {
        try {
            const account = await PostData
                .connection(this.table_name)
                .select()
                .where({ type })
            return account;
        } catch (error: any) {
            let err = error.message || error.sqlMessage
            throw new Error(err)
        }
    }
}