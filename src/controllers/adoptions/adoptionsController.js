import { adoptionModel } from "../../models/adoptionModel.js";
import { staffModel } from "../../models/staffModel.js";
import { dogsModel } from "../../models/dogsModel.js";
import { candidatesModel } from "../../models/candidatesHouseModel.js";
import { Op } from "sequelize"

//gettodas las adopciones

const getAllAdoptions = async () => {
    const options = {};
    options.include = [
        {
            model: staffModel,
            as: "staff",
            // required: true,
            attributes: ["idStaff", "name"],
        },
        {
            model: dogsModel,
            as: "dogs",
            // required: true,
            attributes: ["idDog", "name"],
        },
        {
            model: candidatesModel,
            as: "candidates",
            // required: true,
            attributes: ["idCandidate", "name"],
        },
    ];
    try {
        const adoptions = await adoptionModel.findAll(options);
        return [null, adoptions];
    } catch (e) {
        console.error(e);
        return [e.message, null];
    }
};



export {
    getAllAdoptions,
    
};

export default {
    getAllAdoptions,
    
};
