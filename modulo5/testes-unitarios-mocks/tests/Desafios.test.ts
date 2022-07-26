import { decreaseCharacterDefense, increaseCharacterStrength, recoverCharacters } from "../src/Desafios";
import { personagens } from "../src/ListaDePersonagens";
import { Personagem } from "../src/Personagem";


describe("Unit testando performAttack", () => {
    //#region recoverCharacters
    test("Testando recoverCharacters esperando um sucesso com função mockada", () => {
        try {
            const a: Personagem = {
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            };
            const b: Personagem = {
                nome: "Defesa",
                vida: 250,
                defesa: 200,
                forca: 90
            };
            const validator = jest.fn(() => {
                return true;
            });
            const result = recoverCharacters(personagens, validator as any);
            expect(result[0].vida).toBe(1500);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(result.length);
            expect(validator).toHaveReturnedTimes(result.length);
        } catch (error: any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(4);
        }
    })

    test("Testando recoverCharacters esperando um fracasso (invalid character) com função mockada", () => {
        try {
            const personagens: Personagem[] = [{
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            },
            {
                nome: "",
                vida: 250,
                defesa: 200,
                forca: 90
            }]
            const validator = jest.fn(() => {
                return false;
            });
            const result = recoverCharacters(personagens, validator as any);

        } catch (error: any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(1);
        }
    })

    test("Testando recoverCharacters esperando um fracasso (invalid character) com função mockada", () => {
        try {
            const personagens: Personagem[] = [{
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            }]
            const validator = jest.fn(() => {
                return true;
            });

            const result = recoverCharacters(personagens, validator as any);

        } catch (error: any) {
            expect(error.message).toBe(`O array de personagens precisa ter 2 ou mais personagens.`);
        } finally {
            expect.assertions(1);
        }
    })

    //#endregion
    //#region increaseCharacterStrength
    test("Testando increaseCharacterStrength esperando um sucesso com função mockada", () => {
        try {
            const a: Personagem = {
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            };
            const validator = jest.fn(() => {
                return true;
            });
            const result = increaseCharacterStrength(a, 250, validator as any);
            expect(a.forca).toBe(250);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(1);
            expect(validator).toHaveReturnedTimes(1);
        } catch (error: any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(4);
        }
    })

    test("Testando increaseCharacterStrength esperando um fracasso (invalid character) com função mockada", () => {
        try {
            const a: Personagem = {
                nome: "",
                vida: 230,
                defesa: 130,
                forca: 230
            };
            const validator = jest.fn(() => {
                return false;
            });
            const result = increaseCharacterStrength(a, 250, validator as any);
            expect(a.forca).toBe(250);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(1);
            expect(validator).toHaveReturnedTimes(1);
        } catch (error: any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(1);
        }
    })

    test("Testando increaseCharacterStrength esperando um fracasso (número menor que a força) com função mockada", () => {
        try {
            const a: Personagem = {
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            };
            const validator = jest.fn(() => {
                return true;
            });
            const result = increaseCharacterStrength(a, 200, validator as any);
            expect(a.forca).toBe(200);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(1);
            expect(validator).toHaveReturnedTimes(1);
        } catch (error: any) {
            expect(error.message).toBe(`O número passado não deve ser menor que a força do personagem atual.`);
        } finally {
            expect.assertions(1);
        }
    })
    //#endregion
        //#region decreaseCharacterDefense
        test("Testando decreaseCharacterDefense esperando um sucesso com função mockada", () => {
            try {
                const a: Personagem = {
                    nome: "Atacante",
                    vida: 230,
                    defesa: 130,
                    forca: 230
                };
                const validator = jest.fn(() => {
                    return true;
                });
                const result = decreaseCharacterDefense(a, 100, validator as any);
                expect(a.defesa).toBe(100);
                expect(validator).toHaveBeenCalled();
                expect(validator).toHaveBeenCalledTimes(1);
                expect(validator).toHaveReturnedTimes(1);
            } catch (error: any) {
                expect(error.message).toBe(`Invalid Character`);
            } finally {
                expect.assertions(4);
            }
        })
    
        test("Testando decreaseCharacterDefense esperando um fracasso (invalid character) com função mockada", () => {
            try {
                const a: Personagem = {
                    nome: "",
                    vida: 230,
                    defesa: 130,
                    forca: 230
                };
                const validator = jest.fn(() => {
                    return false;
                });
                const result = decreaseCharacterDefense(a, 100, validator as any);
                expect(a.defesa).toBe(100);
                expect(validator).toHaveBeenCalled();
                expect(validator).toHaveBeenCalledTimes(1);
                expect(validator).toHaveReturnedTimes(1);
            } catch (error: any) {
                expect(error.message).toBe(`Invalid Character`);
            } finally {
                expect.assertions(1);
            }
        })
    
        test("Testando decreaseCharacterDefense esperando um fracasso (número menor que a força) com função mockada", () => {
            try {
                const a: Personagem = {
                    nome: "Atacante",
                    vida: 230,
                    defesa: 130,
                    forca: 230
                };
                const validator = jest.fn(() => {
                    return true;
                });
                const result = decreaseCharacterDefense(a, 200, validator as any);
                expect(a.defesa).toBe(200);
                expect(validator).toHaveBeenCalled();
                expect(validator).toHaveBeenCalledTimes(1);
                expect(validator).toHaveReturnedTimes(1);
            } catch (error: any) {
                expect(error.message).toBe(`O número passado não deve ser maior que a defesa do personagem atual.`);
            } finally {
                expect.assertions(1);
            }
        })
        //#endregion
})