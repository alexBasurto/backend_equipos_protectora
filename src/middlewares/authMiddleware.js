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
        try {
            const user = await staffModel.findByPk(req.session.user);

            if (user && user.rol === "admin") {
                // El usuario tiene permisos de administrador, permite el acceso.
                next();
            } else {
                // El usuario no es un administrador, redirige a la página de inicio de sesión.
                res.redirect("/login");
            }
        } catch (error) {
            // Maneja errores de la consulta a la base de datos, si los hay.
            console.error("Error al buscar al usuario en la base de datos:", error);
            res.redirect("/error"); // Puedes redirigir a una página de error personalizada.
        }
    } else {
        // Si no hay sesión de usuario, redirige a la página de inicio de sesión.
        res.redirect("/login");
    }
}
// Exporta el middleware de autenticación.
export {
    isAuthenticated,
    isAdmin
};
