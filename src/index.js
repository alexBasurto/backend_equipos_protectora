// Importa los módulos necesarios: express, dotenv (para cargar variables de entorno) y express-session.
import express from "express";
import dotenv from "dotenv";
import session from "express-session";

// Importa el módulo de enrutador definido en "router.js".
import router from "./routes/router.js";

// Carga las variables de entorno desde un archivo ".env".
dotenv.config();

// Crea una instancia de ExpressJS
const app = express();

// Configura el middleware para servir archivos estáticos desde el directorio "public".
app.use(express.static("public"));

//Vistas

app.set('views', './src/views');
app.set('view engine', 'pug');


// Respuesta a la llamada GET para que devuelva un texto de prueba.
app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

// Inicia el servidor en el puerto 3006 y muestra un mensaje en la consola
app.listen(3000, () => console.log("Servidor web en marcha en puerto 3000."));

