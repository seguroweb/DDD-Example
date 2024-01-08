import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class userController {

    private readonly userUseCase: UserUseCase;

    //inyecto useRUserCase para poder facilitar las pruebas unitarias
    constructor(userUseCase: UserUseCase) {
      this.userUseCase = userUseCase;
    }

    //Register
    async registerUser(req: Request, res: Response){
        const {name, email, edad, trabajo} = req.body;

        try {
            const userCreated = await this.userUseCase.registrarUser({name, email, edad, trabajo})
            res.status(201).json(userCreated);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error del servidor, RegisterUser")
        }
    }

    //List
    async listUsers(req: Request, res: Response){
        try{
            const user = await this.userUseCase.obtenerUsuarios();
            res.status(200).json(user) 
        }catch(error){
            res.status(500).send("Error del Servidor, ListUser")
        }
    }

    //Delete
    async deleteUser(req: Request, res: Response){
        const userId = req.params.id;

        try{
            const deleted = await this.userUseCase.eliminarUsuario(userId);

            if(deleted){
                res.status(200).send("Se elimino el usuario con exito");
            }else{
                res.status(404).send("Usuario no encontrado");
            }
        }catch(error){
            console.log(error);
            res.status(500).send("Error del servidor, deleteUser");
        }
    }

    //Update
    async updateUser(req: Request, res: Response) {
        const userId = req.params.id;
        const { name, email, edad, trabajo } = req.body;
    
        try {
          const updated = await this.userUseCase.actualizarUsuario(userId, {
            name,
            email,
            edad,
            trabajo,
          });
    
          if (updated) {
            res.status(200).send("Se actualizo el usuario con exito");
          } else {
            res.status(404).send("Usuario no encontrado");
          }
        } catch (error) {
          console.log(error);
          res.status(500).send("Error del servidor, updateUser");
        }
      }
  

}