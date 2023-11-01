import candidatesController from "./candidatesController.js";

const getAllCandidates = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, candidates] = await candidatesController.getAllCandidates();
    res.render("candidates/show", { error: error || errorMessage, candidates, session: req.session });
}





export default { getAllCandidates };