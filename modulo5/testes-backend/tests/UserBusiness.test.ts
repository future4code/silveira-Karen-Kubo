import { UserData } from './../src/Data/User';
import { UserBusiness } from './../src/Business/UserBusiness';
import { UserDataMock, UserMockAdmin } from './mocks/UserMock';

const userBusinessMock = new UserBusiness(
    new UserDataMock() as UserData
)

const getUserById = jest.fn(
    (id: string) => userBusinessMock.getUserProfile(id)
)

describe("getUserById", () => {
	// (a)
    test("Erro se o usuário não existe", async () => {
        try {
            const profile = await userBusinessMock.getUserProfile("ABC");

        } catch (error:any) {
            expect(error.message).toBe(`Usuário não encontrado`);

        } finally {
            expect.assertions(1);
        }
    })
    
	// (b)
    test("Sucesso devolvendo o usuário", async () => {
        try {
            const profile = await userBusinessMock.getUserProfile("id_mock_admin");

            expect(profile).toEqual(UserMockAdmin);
            expect(userBusinessMock.getUserProfile).toHaveBeenCalledWith("id_mock_admin")
        } catch (error:any) {
            expect(error.message).toBe(`Usuário não encontrado`);

        }finally{
            expect.assertions(2);
        }
    })
})