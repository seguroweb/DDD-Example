import { UserEntity } from "./user.entity";
import { UserValue } from "./user.value";

//Creo una interfaz basado en el entity
export interface UserRepository {
    registerUser(user: UserEntity): Promise<string | null>;
    listUser(): Promise<UserEntity[] | null>;
    deleteUser(userId: string): Promise<boolean | null>;
    updateUser(userId: string, user: UserValue): Promise<boolean | null>; 
}