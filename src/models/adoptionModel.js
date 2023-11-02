import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { candidatesModel } from "./candidatesModel.js";
import { dogsModel } from "./dogsModel.js";
import { staffModel } from "./staffModel.js";

const adoptionModel = sequelize.define("tbDogsCandidates", {
    idStaff: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: staffModel,
            key: "idStaff"
        }
    },
    idDog: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: dogsModel,
            key: "idDog"
        }
    },
    idCandidate: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: candidatesModel,
            key: "idCandidate"
        }
    },
    adopDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING(200),
        defaultValue: null
    }
});

adoptionModel.belongsTo(staffModel, {
    foreignKey: "idStaff",
    as: "staff"
});

adoptionModel.belongsTo(dogsModel, {
    foreignKey: "idDog",
    as: "dog"
});

adoptionModel.belongsTo(candidatesModel, {
    foreignKey: "idCandidate",
    as: "candidate"
});
export default adoptionModel;