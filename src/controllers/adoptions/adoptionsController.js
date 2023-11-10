import { adoptionModel } from "../../models/adoptionModel.js";
import { staffModel } from "../../models/staffModel.js";
import { dogsModel } from "../../models/dogsModel.js";
import { candidatesModel } from "../../models/candidatesHouseModel.js";
import sequelize from '../../config/sequelize.js';
import { Op } from "sequelize"

const logs = sequelize.options.logging = console.log;
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
            attributes: ["idCandidate", "name", "lastName"],
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
        // Obtener los idDog que no están en el modelo adoptionModel
        const availableDogs = await dogsModel.findAll({
            where: sequelize.literal(
                'idDog NOT IN (SELECT idDog FROM tbDogsCandidates)'
            )
        });

        // Obtener los idCandidate que no están en el modelo adoptionModel y tienen validated = "Si"
        const availableCandidates = await candidatesModel.findAll({
            where: sequelize.literal(
                'idCandidate NOT IN (SELECT idCandidate FROM tbDogsCandidates WHERE idCandidate IS NOT NULL) AND validated = "Si"'
            )
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
