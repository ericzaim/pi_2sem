import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const data_source = AppDataSource
const userRepo = data_source.getRepository(User);

export async function findUsers(){
    const result = await userRepo.find();
    return result;
}

export async function findUserBy(query: any):Promise<User | null> {
    const whereOptions: any[] = [];

    if (!query) return null;

    if (!isNaN(Number(query))) {
        whereOptions.push({ id: Number(query) });
    }

    whereOptions.push({ nome: String(query) });

    whereOptions.push({ email: String(query) });

    return userRepo.findOne({
        where: whereOptions,
    });
}


export function insertUser(nome:string, email:string, password:string){
    const newUser = userRepo.create({
        nome,
        email,
        password
    });
    return userRepo.save(newUser)
}

export async function updateUser(id:number,nome:string, email:string, password:string){
    return await userRepo.update(id, {
        nome,
        email,
        password
    });
}

export function deleteUser(id:number){
    return userRepo.delete(id);
}
