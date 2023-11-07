import { staffModel } from "../../models/staffModel.js";

import { adoptionModel } from "../../models/adoptionModel.js";

import { Op } from "sequelize";


const getAll = async (q = null) => {
    const options = {};
 
    if (q) {
        options.where = {
            name: { [Op.like]: `%${q}%` },
        };
    }
    try {
        const staff = await staffModel.findAll(options);
          
        return[null, staff];
            
        
    } catch (e) {
        return [e.message, null];
    }
};



const getById = async (id) => {
    const options = {};
    options.include = [
        {
            model: staffModel,
            as: "staff",
            attributes: ["idStaff", "name", "lastName"],
        },
    ];
    try {
        const staff = await staffModel.findByPk(id, options);
        return [null, staff];
    } catch (e) {
        return [e.message, null];
    }
};

const create = async (
    email,
    password,
    name,
    lastName,
    rol,
    hiringDate,
    status ) => {
    if (
        email === undefined ||
        password === undefined ||
        name === undefined ||
        lastName === undefined ||
        rol === undefined ||
        hiringDate === undefined ||
        status === undefined
    ) {
        const error = "Rellene todos los campos obligatorios.";
        return [error, null];
    }
    try {
        const staff = await staffModel.create({
            email,
            password,
            name,
            lastName,
            rol,
            hiringDate,
            status,
        });
        return [null, staff];
    } catch (e) {
        return [e.message, null];
    }
};

const update = async (
    idStaff,
    email,
    password,
    name,
    lastName,
    rol, 
    hiringDate,
    status

) => {
    if (idStaff == undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (
        email === undefined ||
        password === undefined ||
        name === undefined ||
        lastName === undefined ||
        rol === undefined ||
        hiringDate === undefined ||
        status === undefined
    ) {
        const error =
            "Los campos email, password, name, lastName, rol, hiring date y status son obligatorios.";
        return [error, null];
    }
    try {
        const staff = await staffModel.findByPk(id);
        staff.email = email;
        staff.password = password;
        staff.name = name;
        staff.lastName = lastName;
        staff.rol = rol;
        staff.hiringDate = hiringDate;
        staff.status = status;
        staff.save();
        return [null, staff];
    } catch (e) {
        console.log(e);
        return [e.message, null];
    }
};

const remove = async (id) => {
    try {
        const staff = await staffModel.findByPk(id);
        if (!staff) {
            const error = "No se ha encontrado ningún miembro del staff con ese ID.";
            return [error, null];
        }

        const checkAdoption = await adoptionModel.count({
            where: { idStaff: staff.idStaff },
        });
        if (checkAdoption > 0) {
            const error = `No se puede borrar. Existe(n) ${checkAdoption} registro(s) en adopciones asociados a este perro.`;
            return [error, null];
        }

        staff.destroy();
        return [null, dog];
    } catch (e) {
        return [e.message, null];
    }
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};
