import { performAttack } from "../src/Luta";
import { Personagem } from "../src/Personagem";


describe("Unit testando performAttack", () => {
    test("Testando mock", () => {
        const mock = jest.fn(() => {
            const personagem:Personagem = {
                nome: "Novo",
                vida: 30,
                defesa: 30,
                forca: 30
            };
            return personagem;
        })
    })

    test("b)Testando performAttack esperando um sucesso com função mockada" , () => {
        try {
            const a:Personagem = {
                nome: "Atacante",
                vida: 230,
                defesa: 130,
                forca: 230
            };
            const b:Personagem = {
                nome: "Defesa",
                vida: 250,
                defesa: 200,
                forca: 90
            };
            const validator = jest.fn(() => {
                return true;
            });
            const result = performAttack(a, b, validator as any);
            expect(b.vida).toBe(220);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(2);
            expect(validator).toHaveReturnedTimes(2);
        } catch (error:any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(4);
        }
    })

    test("c)Testando performAttack esperando um erro com função mockada" , () => {
        try {
            const a:Personagem = {
                nome: "",
                vida: 230,
                defesa: 30,
                forca: 90
            };
            const b:Personagem = {
                nome: "Novo",
                vida: 290,
                defesa: 30,
                forca: 30
            };
            const validator = jest.fn(() => {
                return false;
            });
            performAttack(a, b, validator as any);
        } catch (error:any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(1);
        }
    })

    test("d)Testando performAttack esperando nenhuma alteração da vida do defensor com função mockada" , () => {
        try {
            const a:Personagem = {
                nome: "Atacante",
                vida: 230,
                defesa: 30,
                forca: 90
            };
            const b:Personagem = {
                nome: "Defensor",
                vida: 290,
                defesa: 100,
                forca: 30
            };
            const validator = jest.fn(() => {
                return true;
            });
            performAttack(a, b, validator as any);

            expect(b.vida).toBe(290);
            expect(validator).toHaveBeenCalled();
            expect(validator).toHaveBeenCalledTimes(2);
            expect(validator).toHaveReturnedTimes(2);
        } catch (error:any) {
            expect(error.message).toBe(`Invalid Character`);
        } finally {
            expect.assertions(4);
        }
    })
})