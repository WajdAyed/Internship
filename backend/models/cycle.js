const { Sequelize, DataTypes } = require('sequelize');

let sequelize = require('../config/dbConfig');


const Cycle = sequelize.define('Cycle', {
    cycle_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        timestamps : false
    }
);

module.exports = Cycle; 