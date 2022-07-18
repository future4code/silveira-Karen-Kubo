import { UserMockNormal, UserMockAdmin } from './UserMock';
export class TokenMock {
    public generate = (input: {
        id: string;
        role: string;
    }) => { }

    public verify(token: string) {
        switch(token) {
            case "token_normal":
                return {id: UserMockNormal.getId(), role: UserMockNormal.getRole()};
            case "token_admin":
                return {id: UserMockAdmin.getId(), role: UserMockAdmin.getRole()};
            default:
                return undefined;
        }
    }

}