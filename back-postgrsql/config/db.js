const pqsqlPool = require("pg").Pool

const pool = new pqsqlPool({
  user:"postgres",
  password:"test@123",
  database:"smarter_one",
  host:"localhost",
  port:"5432",
  max:10
});

pool.connect((err, connection) => {
  if(err) throw err;
  console.log("Connected to postgresql db successfully..!");
  connection.release();
})

module.exports = pool;

// const { Sequelize } = require('sequelize');
// require('dotenv').config(); // Load environment variables

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.DB_HOST || 'localhost',
//   port: process.env.DB_PORT || 5432,
//   username: process.env.DB_USER || 'postgres',
//   password: process.env.DB_PASSWORD || 'test@123',
//   database: process.env.DB_NAME || 'smarter_one',
//   logging: false, // Disable Sequelize logs
// });

// module.exports = sequelize;
