// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";
import candidatesRouter from "./candidatesRouter.js"
import dogsRouter from "./dogsRouter.js";
import adoptionsRouter from "./adoptionsRouter.js"
import publicDogsRouter from "./publicDogsRouter.js"
import authRouter from "./authRouter.js";


// Crea una instancia de Router para definir rutas.
const router = Router();

//Creamos ruta para canidates

router.use("/candidates",candidatesRouter);

//Creamos ruta para dogs

router.use("/dogs",dogsRouter);

//Creamos ruta para adopciones

router.use("/adoptions",adoptionsRouter);

//Creamos ruta para PublicDogs

router.use("/publicdogs",publicDogsRouter)

//Creamos ruta para login

router.use("/",authRouter);


// Exporta el objeto de rutas para su uso en la aplicación.
export default router;