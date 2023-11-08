import bcrypt from "bcrypt";
import {staffModel} from "../../models/staffModel.js";


// Controlador para el inicio de sesión.
const login = async(req,res)=>{
    console.log("REQ BODY " + req.body.email + " " + req.body.password);
    const {email,password} = req.body;
    try{
        const user = await staffModel.findOne({where:{email:email}})
        console.log(user);
        if(!user){
            throw new Error("credenciales incorrectas");
        }
        const hash = user.password;

        if(await bcrypt.compare(password,hash)){
            req.session.user = user.idStaff;
            req.session.rol = user.rol;
        } else {
            throw new Error("Contraseña errónea.")
        }
    }
    catch(e){
        const errorUri = encodeURIComponent("credenciales incorrectas");
        return res.redirect("/login?error="+errorUri);
    }
    
    res.redirect("/");
}
// Controlador para mostrar el formulario de inicio de sesión.
const loginForm = (req,res) => {
    const errorMessage = req.query.error
    res.render("auth/login",{error:errorMessage});
}

// Controlador para cerrar sesión.
const logout = (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
}

// Exporta los controladores relacionados con la autenticación.
export default {
    login,
    loginForm,
    logout
}