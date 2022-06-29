export class Recipe {
    constructor(
        private id:string,
        private title:string,
        private description:string,
        private createdAt:Date,
    ) {};
    
    public getId():string{
        return this.id;
    };
    public getTitle():string{
        return this.title;
    };
    public getDescription():string{
        return this.description;
    };
    public getCreatedAt():Date{
        return this.createdAt;
    };
    static toRecipeModel(data:any):Recipe{
        return new Recipe(data.id, data.title, data.description, data.createdAt)
    };
}