import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity{
    name: string;
    email: string;
    edad: string;
    trabajo: string;

    //Constructor que inicializa el entity
    constructor({name, email, edad, trabajo}:{name:string; email:string; edad:string, trabajo:string}){
        this.name = name;
        this.email = email;
        this.edad = edad;
        this.trabajo = trabajo;
    }

}