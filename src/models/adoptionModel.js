import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import { staffModel } from "./staffModel.js";
import { candidatesModel } from "./candidatesHouseModel.js";
import { dogsModel } from "./dogsModel.js";

const adoptionModel = sequelize.define("tbDogsCandidates", {
    idStaff: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: staffModel,
            key: "idStaff",
        },
    },
    idDog: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: dogsModel,
            key: "idDog",
        },
    },
    idCandidate: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: candidatesModel,
            key: "idCandidate",
        },
    },
    adopDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING(200),
        defaultValue: null,
    },
});

adoptionModel.belongsTo(staffModel, {
    foreignKey: "idStaff",
    as: 'staff'
});
adoptionModel.belongsTo(dogsModel, {
    foreignKey: "idDog",
    as: 'dogs'
});
adoptionModel.belongsTo(candidatesModel, {
    foreignKey: "idCandidate",
    as: 'candidates'
});

staffModel.hasMany(adoptionModel, { foreignKey: "idStaff" });
dogsModel.hasMany(adoptionModel, { foreignKey: "idDog" });
candidatesModel.hasMany(adoptionModel, { foreignKey: "idCandidate" });

export { adoptionModel };