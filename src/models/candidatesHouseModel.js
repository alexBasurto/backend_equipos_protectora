import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const typeOfHousingModel = sequelize.define('tbTypeOfHousing', {
    idTypeOfHousing: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    TypeOfHousing: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  });


  const candidatesModel = sequelize.define('tbCandidates', {
    idCandidate: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    dni: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    yearOfBirth: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    validated: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  });

  tbCandidates.belongsTo(tbTypeOfHousing, {
    foreignKey: 'idTypeOfHousing'
  });

  export default{

    typeOfHousingModel,
    candidatesModel

  }