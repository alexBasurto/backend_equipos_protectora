import candidatesController from "./candidatesController.js";

const getAllCandidatesView = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, candidates] = await candidatesController.getAllCandidates();
    res.render("candidates/show", { error: error || errorMessage, candidates, session: req.session });
}

const getCandidatesByIdView = async (req,res) =>{
    const id = req.params.id;
    const [error,candidate] = await candidatesController.getCandidatesById(id);
    res.render("candidates/show",{error,candidate,session:req.session});   
}

const updateForm = async (req, res) => {
    const errorMessage = req.query.error;
    const typesOfHousing = await candidatesController.getTypesOfHousing();
    const id = req.params.id;

    try {
        const [error, candidate] = await candidatesController.getCandidatesById(id);

        if (error) {
            res.redirect("/candidates"); 
        }

        res.render("candidates/edit", { error: errorMessage, candidate, typesOfHousing });
    } catch (error) {
        console.error(error);
        res.redirect("/candidates"); 
    }
};

const update = async (req, res) => {
    const id = req.params.id;
    const { name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing } = req.body;

    try {
        const [error, candidate] = await candidatesController.updateCandidates(id, name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing, {
         
        });
        if (error) {
            const uriError = encodeURIComponent(error);
            return res.redirect(`/candidates/${id}/edit?error=${uriError}`);
        }

        res.redirect(`/candidates/`);
    } catch (error) {
        console.error(error);
        const uriError = encodeURIComponent("Error interno del servidor. Por favor, inténtalo de nuevo más tarde.");
        return res.redirect(`/candidates/${id}/edit?error=${uriError}`);
    }
};

const remove = async (req,res)=>{
    const id = req.params.id;
    const [error,candidate] = await candidatesController.removeCandidates(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/candidates?error=${uriError}`);
    }
    res.redirect("/candidates");
}

const createForm = async (req, res) => {
    const error = req.query.error;
    const typesOfHousing = await candidatesController.getTypesOfHousing();
    const candidate = {
        name: "", 
        lastName: "", 
        dni: "", 
        yearOfBirth: "", 
        comments: "", 
        validated: "", 
        city: "", 
        idTypeOfHousing: "", 
       
    };
    res.render("candidates/new", { error, candidate, typesOfHousing });
};

const create = async (req, res) => {
    const { name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing } = req.body;
    const [error, candidate] = await candidatesController.createCandidates(name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/candidates/new?error=${uriError}`); 
    }
    res.redirect("/candidates");
}
export default { getAllCandidatesView ,
    updateForm,
    update,
    getCandidatesByIdView,
    remove,
    create,
    createForm
};
