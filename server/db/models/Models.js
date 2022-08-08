const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Unit = sequelize.define(
  'unit',
  {
    // Model attributes are defined here
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,

      // allowNull defaults to true
    },
    state: {
      type: DataTypes.STRING,

      // allowNull defaults to true
    },
    zip: {
      type: DataTypes.NUMBER,
    },
    community: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

const Workorder = sequelize.define('workorder', {
  issue: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});
Unit.hasMany(Workorder);
Workorder.belongsTo(Unit);

// `sequelize.define` also returns the model
module.exports = { Unit, Workorder };
