const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.log('Database connection failed:', err);
  });

module.exports = sequelize;
