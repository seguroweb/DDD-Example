import express from 'express';
import useRouter from './infractructure/route/userRoutes';
import { Request, Response } from "express";


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Uso el enrutador de usuarios
app.use('/users', useRouter);

app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });

// Inicio el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
