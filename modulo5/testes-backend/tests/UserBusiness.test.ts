import { UserData } from './../src/Data/User';
import { UserBusiness } from './../src/Business/UserBusiness';
import { UserDataMock, UserMockAdmin, UserMockNormal } from './mocks/UserMock';

const userBusinessMock = new UserBusiness(
    new UserDataMock() as UserData
)

const getUserById = jest.fn(
    (id: string) => userBusinessMock.getUserProfile(id)
)
const getAllUsers = jest.fn(
    (id: string) => userBusinessMock.getAllUsers(id)
)

describe("getUserById", () => {
	// (a)
    test("Erro se o usuário não existe", async () => {
        try {
            const profile = await getUserById("ABC");

        } catch (error:any) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe(`Usuário não encontrado`);

        } finally {
            expect.assertions(2);
        }
    })
    
	// (b)
    test("Sucesso devolvendo o usuário", async () => {
        try {
            const profile = await getUserById("id_mock_admin");

            expect(profile).toEqual(UserMockAdmin);
            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
        } catch (error:any) {
            expect(error.message).toBe(`Usuário não encontrado`);

        }finally{
            expect.assertions(2);
        }
    })
})

describe("getAllUsers", () => {
	// (a)
    test("Erro se o usuário não for permitido", async () => {
        try {
            const users = await getAllUsers("id_mock_normal");

        } catch (error:any) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toBe(`Você não possui autorização para visualizar os usuários`);

        } finally {
            expect.assertions(2);
        }
    })
    
	// (b)
    test("Sucesso devolvendo os usuários", async () => {
        try {
            const users = await getAllUsers("id_mock_admin");

            expect(users).toEqual([UserMockAdmin, UserMockNormal]);
            expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
        } catch (error:any) {
            expect(error.message).toBe(`Usuário não encontrado`);

        }finally{
            expect.assertions(2);
        }
    })
})