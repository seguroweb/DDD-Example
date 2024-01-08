import express from 'express';
import { userController } from '../controller/useController';
import { UserUseCase } from '../../application/userUseCase';
import { FirebaseUserRepository } from '../../firebase/firebaseUserRepository';

//creo las instancias.
const userRepository = new FirebaseUserRepository(); 
const userUseCase = new UserUseCase(userRepository);
const UserController = new userController(userUseCase);

const useRouter = express.Router();

useRouter.post('/register', (req, res) => UserController.registerUser(req, res));
useRouter.get('/list', (req, res) => UserController.listUsers(req, res));
useRouter.delete('/delete/:id', (req, res) => UserController.deleteUser(req, res));
useRouter.put('/update/:id', (req, res) => UserController.updateUser(req, res));

export default useRouter;