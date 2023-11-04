import { adoptionModel } from "../../models/adoptionModel.js";
import { staffModel } from "../../models/staffModel.js";
import { dogsModel } from "../../models/dogsModel.js";
import { candidatesModel } from "../../models/candidatesHouseModel.js";
import sequelize from '../../config/sequelize.js';


const logs= sequelize.options.logging = console.log;
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

const getAvailableDogsAndCandidates = async () => {
    try {
        
        const availableDogs = await dogsModel.findAll({
            where: {
                idDog: {
                    [sequelize.Op.notIn]: sequelize.literal('(SELECT idDog FROM tbDogsCandidates)'),
                }
            }
        });

        
        const availableCandidates = await candidatesModel.findAll({
            where: {
                idCandidate: {
                    [sequelize.Op.notIn]: sequelize.literal('(SELECT idCandidate FROM tbDogsCandidates WHERE idCandidate IS NOT NULL)'),
                },
                validated: "Si"
            }
        });

        return { availableDogs, availableCandidates };
    } catch (error) {
        throw error;
    }
};

const createAdoption = async (idStaff, idDog, idCandidate, adopDate, comments) => {
    try {
        const adoption = await adoptionModel.create({
            idStaff,
            idDog,
            idCandidate,
            adopDate,
            comments,
        });
        return [null, adoption];
    } catch (error) {
        return [error.message, null];
    }
};

export {
    getAllAdoptions,
    createAdoption,
    getAvailableDogsAndCandidates
};

export default {
    getAllAdoptions,
    createAdoption,
    getAvailableDogsAndCandidates
};
