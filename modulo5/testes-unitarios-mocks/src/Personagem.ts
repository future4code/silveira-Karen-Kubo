export interface Personagem {
    nome:string,
    vida:number,
    defesa:number,
    forca:number
}

export function validateCharacter (personagem:Personagem):boolean {
    if (!personagem.nome || isNaN(personagem.vida) || isNaN(personagem.defesa) || isNaN(personagem.forca)) {
        return false;
    };

    if (personagem.vida>0 && personagem.defesa>0 && personagem.forca>0) {
        return true;
    } else {
        return false;
    };
};