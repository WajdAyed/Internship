const { Sequelize, DataTypes } = require('sequelize');

let sequelize = require('../config/dbConfig');

const Participant = sequelize.define('Participant', {
    par_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fullname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    foundation: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    landLine: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fax: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mobilePhone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
},
    {
        freezeTableName: true,
        timestamps : false
    }
);

module.exports = Participant; 