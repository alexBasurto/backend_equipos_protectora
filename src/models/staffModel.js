import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const staffModel = sequelize.define('tbStaff', {
    idStaff: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(120),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'standardUser'
    },
    hiringDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'tbStaff',
    timestamps: false
});

export {

    staffModel

  }
