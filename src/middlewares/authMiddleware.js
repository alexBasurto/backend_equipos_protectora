import {staffModel} from "../models/staffModel.js";

// Middleware de autenticación que verifica si un usuario ha iniciado sesión.
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        // Si existe una sesión de usuario, se considera autenticado.
        next(); // Llama a la siguiente función en la cadena de middleware.
    } else {
        // Si no existe una sesión de usuario, se redirige al usuario a la página de inicio de sesión.
        res.redirect("/login");
    }
}

const isAdmin = async (req,res,next) =>{
    if(req.session.user ){
        const user = await staffModel.findByPk(req.session.user);
        if(user.rol !== "admin"){
            res.redirect("/login");
        }
        next();
    }
    else{
        res.redirect("/login");
    }
}
// Exporta el middleware de autenticación.
export {
    isAuthenticated,
    isAdmin
};
