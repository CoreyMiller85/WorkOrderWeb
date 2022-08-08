const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite',
});

module.exports = sequelize;
