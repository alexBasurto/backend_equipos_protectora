import { staffModel } from "../../models/staffModel.js";

import { Op } from "sequelize"

// busqueda de todos los candidatos
//tenemos que incluir el as con el mismo valor para asociar el alias en la consulta
const getAllStaff = async () => {
    try {
        const staff = await staffModel.findAll(
        );
        return [null, staff];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};

export default {

    getAllStaff
}