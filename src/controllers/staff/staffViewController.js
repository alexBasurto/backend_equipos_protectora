import staffController from "./staffController.js";

const getAll = async (req, res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, staff] = await staffController.getAll(q);
    res.render("staff/list", {
        error: error || errorMessage,
        staff,
        session: req.session,
    });
};

const getById = async (req, res) => {
    const id = req.params.id;
    const [error, staff] = await staffController.getById(id);
    res.render("staff/show", 
    { 
        error, 
        staff, 
        session: req.session 
    });
};

const createForm = async (req, res) => {
    const error = req.query.error;
   

//    const [rolsError, rols] = await staffController.getRols();

   if (error) {
        res.redirect("/staff");
    }
    res.render("staff/new", error );
};

const create = async (req, res) => {
    const { email, 
        password, 
        name, 
        lastName, 
        rol,
        hiringDate, 
        status } =
        req.body;
    const [error, staff] = await staffController.create(
        email,
        password,
        name,
        lastName,
        rol,
        hiringDate,
        status
    );
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/staff/new?error=${uriError}`);
    }
    res.redirect("/staff");
};

const updateForm = async (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, staff] = await staffController.getById(id);
    //const [rolsError, rol] = await staffController.getRols();
    if (error) {
        res.redirect("/staff");
    }
    res.render("staff/edit", {
        error: errorMessage,
        staff,
        //rol,
        session: req.session,
    });
};

const update = async (req, res) => {
    const id = req.params.id;
    const { 
        idStaff,
        email, 
        password, 
        name, 
        lastName,
        rol, 
        hiringDate, 
        status
     } =
        req.body;
    
        const [error, staff] = await staffController.update(
        idStaff,
        email,
        password,
        name,
        lastName,
        rol,
        hiringDate,
        status
    );
    
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/staff/${id}/edit?error=${uriError}`);
    }
    res.redirect("/staff");
};

const remove = async (req, res) => {
    const id = req.params.id;
    const [error, staff] = await staffController.remove(id);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/staff?error=${uriError}`);
    }
    res.redirect("/staff");
};

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
};
