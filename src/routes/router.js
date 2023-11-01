// Importa el módulo "Router" desde "express" para definir rutas.
import { Router } from "express";
import candidatesRouter from "./candidatesRouter.js"
import dogsRouter from "./dogsRouter.js";

// Crea una instancia de Router para definir rutas.
const router = Router();

//Creamos ruta para canidates

router.use("/candidates",candidatesRouter);

//Creamos ruta para dogs

router.use("/dogs",dogsRouter);

// Exporta el objeto de rutas para su uso en la aplicación.
export default router;