import { candidatesModel, typeOfHousingModel } from "../../models/candidatesHouseModel.js"
import { Op } from "sequelize"

// busqueda de todos los candidatos
//tenemos que incluir el as con el mismo valor para asociar el alias en la consulta
const getAllCandidates = async () => {
    try {
        const candidates = await candidatesModel.findAll({
            include: [
                {
                    model: typeOfHousingModel,
                    as: 'typeOfHousing', 
                    attributes: ['idTypeOfHousing', 'TypeOfHousing']
                }
            ]
        });
        return [null, candidates];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};
//busqueda por id

const getCandidatesById = async (id) => {
    try {
        const candidate = await candidatesModel.findByPk(id);
        return [null, candidate];
    }
    catch (error) {
        return [error.message, null];
    }
}


//creacion de nuevos candidatos

const createCandidates = async (name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing) => {
    if (name === undefined || lastName === undefined || dni === undefined || yearOfBirth === undefined || validated === undefined || city === undefined || idTypeOfHousing === undefined) {
        const error = "Todos los campos se deben rellenar, incluyendo idTypeOfHousing";
        return [error, null];
    }

    try {
        //buscamos por id en la tabla de typeOfHousing
        const typeOfHousing = await typeOfHousingModel.findByPk(idTypeOfHousing);
        //si el id no existe retornamos error
        if (!typeOfHousing) {
            const error = "El idTypeOfHousing no es válido.";
            return [error, null];
        }

        //creamos nuevo registro si el dni es unico
        
        const [candidate, created] = await candidatesModel.findOrCreate({
            where: {
                dni: dni
            },
            defaults: {
                name,
                lastName,
                yearOfBirth,
                comments,
                validated,
                city,
                idTypeOfHousing
            }
        });

        if (!created) {
            const error = "El DNI ya existe en la base de datos.";
            return [error, null];
        }

        return [null, candidate];
    } catch (error) {
        return [error.message, null];
    }
};

//actualizacion de datos de candidatos

const updateCandidates = async (idCandidate, name, lastName, dni, yearOfBirth, comments, validated, city, idTypeOfHousing) => {
    if (idCandidate === undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
     // Verificar si el DNI ya está en uso por otro candidato
     const existingCandidate = await candidatesModel.findOne({
        where: {
            dni: dni,
            idCandidate: {
                [Op.not]: idCandidate,
              }
        }
    });

    if (existingCandidate) {
        const error = "El DNI ya está en uso por otro candidato.";
        return [error, null];
    }

    if (name === undefined || lastName === undefined || dni === undefined || yearOfBirth === undefined || validated === undefined || city === undefined || idTypeOfHousing === undefined) {
        const error = "Todos los campos deben ser estar, incluyendo idTypeOfHousing.";
        return [error, null];
    }

    try {
        const candidate = await candidatesModel.findByPk(idCandidate);

        if (!candidate) {
            const error = "No se ha enconrado un candidato con el ID proporcionado.";
            return [error, null];
        }

        // MIramos si idTypeOfHousing existe en la tabla tbTypeOfHousing
        const typeOfHousing = await typeOfHousingModel.findByPk(idTypeOfHousing);

        if (!typeOfHousing) {
            const error = "El idTypeOfHousing no es válido.";
            return [error, null];
        }

        candidate.name = name;
        candidate.lastName = lastName;
        candidate.dni = dni;
        candidate.yearOfBirth = yearOfBirth;
        candidate.comments = comments;
        candidate.validated = validated;
        candidate.city = city;
        candidate.idTypeOfHousing = idTypeOfHousing;

        await candidate.save();

        return [null, candidate];
    } catch (error) {
        console.error(error);
        return [error.message, null];
    }
};
//borado de candidatos


const removeCandidates = async (id) => {
    try {
        const candidate = await candidatesModel.findByPk(id);
        if (!candidate) {
            const error = "No se ha encontrado ningún candidato con ese ID.";
            return [error, null];
        }

        await candidate.destroy();

        return [null, candidate];
    } catch (error) {
        console.error(error); // Registra el error en la consola para depuración
        return [error.message, null];
    }
};

export {
    getAllCandidates,
    createCandidates,
    updateCandidates,
    removeCandidates,
    getCandidatesById
};

export default {
    getAllCandidates,
    createCandidates,
    updateCandidates,
    removeCandidates,
    getCandidatesById
};
