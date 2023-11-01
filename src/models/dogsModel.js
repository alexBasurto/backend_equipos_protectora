import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const dogsModel = sequelize.define("tbDogs", {
    idDog: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    photo: {
        type: DataTypes.STRING(200),
        defaultValue: null,
    },
    behavior: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    yearOfBirth: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING(200),
        defaultValue: null,
    },
    idBreed: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: "tbBreeds",
            key: "idBreed",
        },
    },
});

const breedModel = sequelize.define("tbBreeds", {
    idBreed: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    lifeExpectancy: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
})

export default {
    dogsModel,
    breedModel
};
