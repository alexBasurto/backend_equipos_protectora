import staffCrontoller from "./staffCrontoller.js";

const getAllStaffView = async (req, res) => {
    const errorMessage = req.query.error;
    const [error, staffMembers] = await staffCrontoller.getAllStaff();
    res.render("staff/list", { error: error || errorMessage, staffMembers, session: req.session });
}


export default{

    getAllStaffView

}