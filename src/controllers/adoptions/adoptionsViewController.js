import adoptionsController from "./adoptionsController.js";


const getAllAdoptionsView = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, adoptions] = await adoptionsController.getAllAdoptions();


    res.render("adoptions/show", { error: error || errorMessage, adoptions, session: req.session });
};

const createForm = async (req, res) => {
    const error = req.query.error;
    const adoption = {
        idStaff: 1,
        idDog: "",
        idCandidate: "",
        adopDate: "",
        comments: ""
    }
    try {
        const { availableDogs, availableCandidates } = await adoptionsController.getAvailableDogsAndCandidates();

        // Renderizar la página con los datos obtenidos
        res.render("adoptions/new", { error, availableDogs, availableCandidates, adoption });
    } catch (error) {
        console.error(error);
        // Manejar el error adecuadamente
        res.status(500).send("Error interno del servidor");
    }
};

const create = async (req, res) => {
    const { idStaff,
        idDog,
        idCandidate,
        adopDate,
        comments } = req.body;
    const [error, adoption] = await adoptionsController.createAdoption(idStaff,
        idDog,
        idCandidate,
        adopDate,
        comments);


    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/adoptions/new?error=${uriError}`);
    }
    res.redirect("/adoptions");
}

export default {
    getAllAdoptionsView,
    createForm,
    create,


};

export {
    getAllAdoptionsView,
    createForm,
    create,
}