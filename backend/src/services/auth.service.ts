import { findUserBy } from "../repositories/user.repository";

export async function authService(user:{login:string, password:string}){
    const result = await findUserBy(user.login);

    if (!result || result.password !== user.password) {
        return null;
    }
    return {
        id:result.getId(),
        name:result.getName(),
        login:result.getEmail(),
        password:result.getPassword()
    };
}