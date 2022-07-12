import { Personagem, validateCharacter } from './Personagem';

export function performAttack(atacante:Personagem, defensor:Personagem, validator:(input:any)=> boolean){
    const atacanteIsValid:boolean = validator(atacante);
    const defensorIsValid:boolean = validator(defensor);

    if (!atacanteIsValid || !defensorIsValid) {
        throw new Error(`Invalid Character`);
    };

    if (atacante.forca > defensor.defesa) {
        defensor.vida -= atacante.forca - defensor.defesa
    };
    
    return defensor;
};


