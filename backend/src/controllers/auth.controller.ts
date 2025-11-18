import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export async function authUser(req:Request, res:Response){
    const login:{login:string,password:string} = req.body;
    try{
        const user = await authService(login);
        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        return res.status(200).json(user);
    }catch(err){
        throw err;
    }

}