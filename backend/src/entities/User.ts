import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string
    @Column()
    email: string;
    @Column()
    password: string;
    
    constructor(id: number, nome: string, email: string, password: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
    }

    getId(): number{
        return this.id;
    }
    
    setId(id: number): void{
        this.id = id;
    }
    
    getName(): string{
        return this.nome;
    }
    
    setName(nome: string): void{
        this.nome = nome;
    }
    
    getEmail(): string{
        return this.email;
    }
    
    setEmail(email: string): void{
        this.email = email;
    }
    
    getPassword(): string{
        return this.password;
    }
    
    setPassword(password: string): void{
        this.password = password;
    }

}