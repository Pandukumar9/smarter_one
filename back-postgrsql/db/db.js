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
