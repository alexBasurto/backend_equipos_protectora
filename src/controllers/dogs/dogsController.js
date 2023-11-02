import { dogsModel, breedModel } from "../../models/dogsModel.js";
import { adoptionModel } from "../../models/adoptionModel.js";
import { Op } from "sequelize";

const getAll = async (q = null) => {
    const options = {};
    options.include = [
        {
            model: breedModel,
            as: "breed",
            attributes: ["idBreed", "name"],
        },
    ];
    if (q) {
        options.where = {
            nameDog: { [Op.like]: `%${q}%` },
        };
    }
    try {
        const dogs = await dogsModel.findAll(options);
        return [null, dogs];
    } catch (e) {
        return [e.message, null];
    }
};

const getById = async (id) => {
    const options = {};
    options.include = [
        {
            model: breedModel,
            as: "breed",
            attributes: ["idBreed", "name"],
        },
    ];
    try {
        const dog = await dogsModel.findByPk(id, options);
        return [null, dog];
    } catch (e) {
        return [e.message, null];
    }
};

const create = async (
    name,
    color,
    size,
    photo,
    behavior,
    yearOfBirth,
    comments,
    idBreed
) => {
    if (
        name === undefined ||
        color === undefined ||
        size === undefined ||
        behavior === undefined ||
        yearOfBirth === undefined ||
        idBreed === undefined
    ) {
        const error = "Rellene todos los campos obligatorios.";
        return [error, null];
    }
    try {
        const dog = await dogsModel.create({
            name,
            color,
            size,
            photo,
            behavior,
            yearOfBirth,
            comments,
            idBreed,
        });
        return [null, dog];
    } catch (e) {
        return [e.message, null];
    }
};

const update = async (
    id,
    name,
    color,
    size,
    photo,
    behavior,
    year,
    comments,
    breed
) => {
    if (id == undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (
        name === undefined ||
        color === undefined ||
        size === undefined ||
        behavior === undefined ||
        year === undefined ||
        breed === undefined
    ) {
        const error =
            "Los campos nombre, color, tamaño, comportamiento, año nacimiento y raza son obligatorios.";
        return [error, null];
    }
    try {
        const dog = await dogsModel.findByPk(id);
        dog.name = name;
        dog.color = color;
        dog.size = size;
        dog.photo = photo;
        dog.behavior = behavior;
        dog.yearOfBirth = year;
        dog.comments = comments;
        dog.idBreed = breed;
        dog.save();
        return [null, dog];
    } catch (e) {
        console.log(e);
        return [e.message, null];
    }
};

const remove = async (id) => {
    try {
        const dog = await dogsModel.findByPk(id);
        if (!dog) {
            const error = "No se ha encontrado ningún perro con ese ID.";
            return [error, null];
        }
        const checkAdoption = await adoptionModel.count({
            where: { idDog: dog.idDog },
        });
        if (checkAdoption > 0) {
            const error = `No se puede borrar. Existe(n) ${checkAdoption} registro(s) en adopciones asociados a este perro.`;
            return [error, null];
        }
        dog.destroy();
        return [null, dog];
    } catch (e) {
        return [e.message, null];
    }
};

// Breeds

const getAllBreeds = async () => {
    try {
        const breeds = await breedModel.findAll();
        return [null, breeds];
    } catch (e) {
        return [e.message, null];
    }
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getAllBreeds,
};
