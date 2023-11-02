import adoptionsController from "./adoptionsController.js";

const getAllAdoptionsView = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, adoptions] = await adoptionsController.getAllAdoptions();
    res.render("adoptions/show", { error: error || errorMessage, adoptions, session: req.session });
}



export default { getAllAdoptionsView ,
    
};
