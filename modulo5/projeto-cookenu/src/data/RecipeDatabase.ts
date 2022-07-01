import { Recipe } from './../model/Recipe';
import { BaseDatabase } from './BaseDatabase';

export class RecipeDatabase extends BaseDatabase {
    public async createNewRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection(`RECIPE`).insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                createdAt: recipe.getCreatedAt(),
                user_id: recipe.getUserId()
            });
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getRecipe(id:string):Promise<Recipe> {
        try {
            const recipe = await BaseDatabase.connection(`RECIPE`).select(`*`).where({id})
            return recipe[0] && recipe.map((rec) => Recipe.toRecipeModel(rec))
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}