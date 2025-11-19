import type { Request, Response } from 'express';
import { deleteUser, findUserBy, findUsers, insertUser } from '../repositories/user.repository';
import { UserReponseDto } from '../dto/UserResponseDto';
import { User } from '../entities/User';

export async function getUsers(req:Request, res:Response){
    try{
        const result = await findUsers();
        // const users = result.map(user => toResponseDto(user));

        return res.status(200).json(result);
    }catch(err){
        throw err;
    }
}

export async function getUserBy(req:Request, res:Response){
    const login = req.query.user as string;
    try{
        const user = await findUserBy(login).then(user => {
            if(user){
                return toResponseDto(user);
            }
            return null;
        });
        return res.status(200).json(user);
    }
    catch(err){
        throw err;
    }
}

export async function createUsers(req: Request, res: Response) {
    const { nome, email, password } = req.body;

    try { 
        await insertUser(nome, email, password);
        return res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export function patchUser(req:Request, res: Response){
    const { id, nome, email, password } = req.body;
    
    try{
        updateUser(id, nome, email, password);
        return res.status(200).json({ message: 'User updated successfully' });
    }catch(err){
        throw err;
    }    
}

export function delUser(req:Request, res: Response){
    const id = req.params.id;
    try{
        deleteUser(Number(id));
        return res.status(200).json({ message: 'User deleted successfully' });
    }catch(err){
        throw err;
    }
}


function toResponseDto(user:User){
    return new UserReponseDto(
        user.getName(),
        user.getEmail()
    )
}
function updateUser(id: any, nome: any, email: any, password: any) {
    throw new Error('Function not implemented.');
}

