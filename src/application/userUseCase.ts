//Importo de useRepository
import { UserRepository } from "../domain/user.repository"
import { UserValue } from "../domain/user.value"


export class UserUseCase {

    //Inyecto las dependencias y facilito las pruebas initarias
    constructor(private readonly userRepository: UserRepository) {}

    //Register
    public async registrarUser({ name, email, edad, trabajo }: { name: string; email: string; edad: string; trabajo: string }) {
        //Creo la instancia useValue con los parametros que ingrsan
        const useValue = new UserValue({ name, email, edad, trabajo });
        
        //Registro al usuario utilizando userRepository
        const userCreated = await this.userRepository.registerUser(useValue)
        return userCreated
    }

    //List
    public async obtenerUsuarios() {
        //Restorna la lista de usuarios ya registrados, tambien utilizando userRepository
        const users = await this.userRepository.listUser();
        return users;
    }

    //DELETE
    public async eliminarUsuario(userId: string): Promise<boolean | null> {
        try {
            const deleted = await this.userRepository.deleteUser(userId);
            return deleted !== null ? true : false;  
        } catch (error) {
            console.error('Error deleting user:', error);
            return null;  
        }
    }
    
    //UPDATE
    public async actualizarUsuario(
        userId: string,
        { name, email, edad, trabajo }: { name: string; email: string; edad: string; trabajo: string }
      ): Promise<boolean | null> {
        try {
          const updated = await this.userRepository.updateUser(userId, {
            name,
            email,
            edad,
            trabajo,
          });
          return updated !== null ? true : false;
        } catch (error) {
          console.error('Error updating user:', error);
          return null;
        }
      }


}
