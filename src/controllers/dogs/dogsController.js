import dogsModel from "../../models/dogsModel.js";
import {Op} from "sequelize";

const getAll = async (q=null) => {
    const options = {};
    if (q) {
        options.where = { nameDog: {[Op.like]: `%${q}%`},}
    }
    try {
        const dogs = await dogsModel.findAll(options);
        retur [null, dogs];
    } catch(e) {
        return [e.message, null];
    }
}

const getById = async (id) => {
    try {
        const dog = await dogsModel.findByPk(id);
        return [null, dog];
    } catch(e) {
        return [e.message, null];
    }
}

const create = async (/*params*/) => {
    // Cuerpo fn.

    try {

    } catch(e) {

    }
}

const update = async (/*params*/) => {
    // Cuerpo fn.

    try {

    } catch(e) {

    }
}

const remove = async (id) => {
    try {
        const dog = await dogsModel.findByPK(id);
        if (!dog) {
            const error = "No se ha encontrado ningún perro con ese ID."
            return [error, null];
        }
        dog.destroy();
        return [null, dog];
    } catch(e) {
        return [e.message, null];
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};