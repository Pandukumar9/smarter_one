const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Restaurant = require('./restaurant');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    references: {
      model: Restaurant,
      key: 'id',
    },
  },
});

module.exports = Item;
