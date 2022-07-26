import { Personagem, validateCharacter } from "../src/Personagem";

describe("Unit testando validateCharacter", () => {
    test("a) Teste com personagem de nome vazio, deve retornar false", () => {
        const personagem: Personagem = {
            nome: "",
            vida: 40,
            defesa: 20,
            forca: 30
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(false);

    });

    test("b) Teste com personagem com vida 0, deve retornar false", () => {
        const personagem: Personagem = {
            nome: "A",
            vida: 0,
            defesa: 20,
            forca: 30
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(false);

    });

    test("c) Teste com personagem com forca 0, deve retornar false", () => {
        const personagem: Personagem = {
            nome: "B",
            vida: 40,
            defesa: 20,
            forca: 0
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(false);

    });

    test("d) Teste com personagem com defesa 0, deve retornar false", () => {
        const personagem: Personagem = {
            nome: "C",
            vida: 40,
            defesa: 0,
            forca: 30
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(false);

    });

    test("e) Teste com personagem com vida menor que 0, deve retornar false", () => {
        const personagem: Personagem = {
            nome: "D",
            vida: -40,
            defesa: 20,
            forca: 30
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(false);

    });

    test("f) Teste com personagem com informacoes validas, deve retornar true", () => {
        const personagem: Personagem = {
            nome: "E",
            vida: 40,
            defesa: 20,
            forca: 30
        };

        const result = validateCharacter(personagem);
        expect(result).toBe(true);

    });
})