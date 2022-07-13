import { User, USER_ROLES } from "../../src/Data/User";

export const UserMockAdmin = new User(
    "id_mock_admin",
    "admin",
    "admin@gmail.com",
    USER_ROLES.ADMIN
)

export const UserMockNormal = new User(
    "id_mock_normal",
    "normal",
    "normal@gmail.com",
    USER_ROLES.NORMAL
)

export class UserDataMock {
    public async getInfo(id: string): Promise<User | undefined> {
        switch(id) {
            case "id_mock_admin":
                return UserMockAdmin
            case "id_mock_normal":
                return UserMockNormal
            default: 
                return undefined
        }
    }
    
    getAllUsers = async (id:string) => {

        const users = [UserMockAdmin, UserMockNormal]

        return users;
    }
}