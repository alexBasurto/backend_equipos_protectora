import { adoptionModel } from "../../models/adoptionModel.js";
import { dogsModel } from "../../models/dogsModel.js";

import sequelize from '../../config/sequelize.js';

const getAll = async () => {
    try {
        // Obtener los idDog que no están en el modelo adoptionModel
        const availableDogs = await dogsModel.findAll({
            where: sequelize.literal(
                'idDog NOT IN (SELECT idDog FROM tbDogsCandidates)'
            )
        });

        return [null, availableDogs];
    } catch (error) {
        throw error;
    }
};
export default {getAll};
