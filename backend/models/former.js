const { Sequelize, DataTypes } = require('sequelize');

let sequelize = require('../config/dbConfig');
const Cycle = require('./cycle');

const Former = sequelize.define('Former', {
    former_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fullname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    speciality: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        timestamps : false
    }
);



module.exports = Former; 