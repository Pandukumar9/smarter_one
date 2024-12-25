const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Item = require('./item');

const Order = sequelize.define('Order', {
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

// Relate Order to Item (many-to-many)
Order.belongsToMany(Item, { through: 'OrderItems' });
Item.belongsToMany(Order, { through: 'OrderItems' });

module.exports = Order;
