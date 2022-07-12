import { Personagem } from "./Personagem";

export function recoverCharacters(personagens: Personagem[], validator: (input: any) => boolean): Personagem[] {
    for (let personagem of personagens) {
        const personagemIsValid: boolean = validator(personagem);
        if (!personagemIsValid) {
            throw new Error(`Invalid Character`)
        }
        personagem.vida = 1500;
    };

    if (personagens.length < 2) {
        throw new Error(`O array de personagens precisa ter 2 ou mais personagens.`)
    }

    return personagens;
};

export function increaseCharacterStrength(personagem: Personagem, novaForca: number, validator: (input: any) => boolean): Personagem {
    const personagemIsValid: boolean = validator(personagem);
    if (!personagemIsValid) {
        throw new Error(`Invalid Character`)
    }

    if(personagem.forca >= novaForca) {
        throw new Error(`O número passado não deve ser menor que a força do personagem atual.`)
    }

    personagem.forca = novaForca;
    return personagem;
};

export function decreaseCharacterDefense(personagem: Personagem, novaDefesa: number, validator: (input: any) => boolean): Personagem {
    const personagemIsValid: boolean = validator(personagem);
    if (!personagemIsValid) {
        throw new Error(`Invalid Character`)
    }

    if(personagem.defesa <= novaDefesa) {
        throw new Error(`O número passado não deve ser maior que a defesa do personagem atual.`)
    }

    personagem.defesa = novaDefesa;
    return personagem;
};
