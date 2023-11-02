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

const getCandidatesById = async (idCandidate) => {
    try {
        const candidate = await candidatesModel.findByPk(idCandidate);
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
        // Crear un nuevo registro si el dni es único
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
        },
        include: [
            {
                model: typeOfHousingModel, 
                as: 'typeOfHousing', 
                attributes: ['idTypeOfHousing', 'TypeOfHousing'] 
            }
        ]
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
        const candidate = await candidatesModel.findByPk(idCandidate, {
            include: [{
                model: typeOfHousingModel,
                as: 'typeOfHousing' // Asegúrate de que el alias sea correcto si lo has definido
            }]
        });
    
        if (!candidate) {
            const error = "No se ha encontrado un candidato con el ID proporcionado.";
            return [error, null];
        }
    
        // Accede a la relación para obtener el tipo de vivienda
        const typeOfHousing = candidate.typeOfHousing;
    
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


const removeCandidates = async (idCandidate) => {
    try {
        const candidate = await candidatesModel.findByPk(idCandidate);
        if (!candidate) {
            const error = "No se ha encontrado ningún candidato con ese ID.";
            return [error, null];
        }

        await candidate.destroy();

        return [null, candidate];
    } catch (error) {
        console.error(error); 
        return [error.message, null];
    }
};
const getTypesOfHousing = async () => {
    try {
        const typesOfHousing = await typeOfHousingModel.findAll();
        return typesOfHousing;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export {
    getAllCandidates,
    createCandidates,
    updateCandidates,
    removeCandidates,
    getCandidatesById,
    getTypesOfHousing
};

export default {
    getAllCandidates,
    createCandidates,
    updateCandidates,
    removeCandidates,
    getCandidatesById,
    getTypesOfHousing
};
