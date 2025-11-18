export class UserReponseDto{
    private nome:string;
    private email:string;
    
    constructor(nome:string,email:string){
        this.nome = nome;
        this.email = email;
    }
    
    getName():string{
        return this.nome;
    }

    setName(nome:string):void{
        this.nome = nome;
    }

    getEmail():string{
        return this.email
    }

    setEmail(email:string):void{
        this.email = email;
    }

}