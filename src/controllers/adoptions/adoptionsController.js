import adoptionModel from "../../models/adoptionModel.js";
import staffModel from "../../models/staffModel.js";
import { Op } from "sequelize"

//gettodas las adopciones

const getAllAdoptions = async () => {
    try {
        const adoptions = await adoptionModel.findAll({
            include: [
                {
                    model: staffModel,
                    as: "staff",
                    attributes: ["name"], 
                }
            ]
        });
        return [null, adoptions];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};



export {
    getAllAdoptions,
    
};

export default {
    getAllAdoptions,
    
};
