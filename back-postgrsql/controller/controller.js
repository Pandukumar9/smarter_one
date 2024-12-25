// const express = require("express");
// const router = express.Router();
// const db = require("../config/db");
// const bodyParser = require("body-parser");

// router.use(bodyParser.json());
// router.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// // Get all accounts with pagination and sorting
// router.get("/api/v1/accounts", (req, res) => {
//   const { page = 1, limit = 10, sort = "id" } = req.query; // Defaults: page=1, limit=10, sort by id
//   const offset = (page - 1) * limit;
//   const sql = `SELECT * FROM acc.account ORDER BY ${sort} LIMIT $1 OFFSET $2`;
//   db.query(sql, [Number(limit), Number(offset)], (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(200).json(result.rows);
//   });
// });

// // Search accounts by name or type
// router.get("/api/v1/accounts/search", (req, res) => {
//   const { name, type } = req.query;
//   const sql = "SELECT * FROM acc.account WHERE name ILIKE $1 OR type ILIKE $2";
//   db.query(sql, [`%${name}%`, `%${type}%`], (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(200).json(result.rows);
//   });
// });

// // Add a new account
// router.post("/api/v1/accounts", (req, res) => {
//   const { name, type, balance } = req.body;
//   const sql = "INSERT INTO acc.account(name, type, balance) VALUES ($1, $2, $3) RETURNING *";
//   db.query(sql, [name, type, balance], (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(201).json(result.rows);
//   });
// });

// // Update an account by ID
// router.put("/api/v1/accounts/:id", (req, res) => {
//   const accid = Number(req.params.id);
//   const { name, type, balance } = req.body;
//   const sql = "UPDATE acc.account SET name=$1, type=$2, balance=$3 WHERE id=$4";
//   db.query(sql, [name, type, balance, accid], (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(200).json(`Account was updated successfully for id: ${accid}`);
//   });
// });

// // Delete an account by ID
// router.delete("/api/v1/accounts/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const sql = "DELETE FROM acc.account WHERE id=$1";
//   db.query(sql, [id], (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(200).json(`Account was deleted successfully for id: ${id}`);
//   });
// });

// // Delete all accounts
// router.delete("/api/v1/accounts", (req, res) => {
//   const sql = "DELETE FROM acc.account";
//   db.query(sql, (err, result) => {
//     if (err) throw res.json(err);
//     return res.status(200).json("All accounts were deleted successfully");
//   });
// });

// module.exports = router;

// // curl -X DELETE http://localhost:3005/api/v1/accounts
// // curl -X GET "http://localhost:3005/api/v1/accounts/search?name=John&type=Saving"
// // curl -X GET "http://localhost:3005/api/v1/accounts?page=2&limit=5&sort=name"




const express = require('express');
const router = express.Router();
const db = require('../config/db'); // PostgreSQL connection

// Get all accounts with pagination and sorting
router.get("/api/v1/accounts", (req, res) => {
  const { page = 1, limit = 10, sort = "id" } = req.query; // Defaults: page=1, limit=10, sort by id
  const offset = (page - 1) * limit;
  const sql = `SELECT * FROM acc.account ORDER BY ${sort} LIMIT $1 OFFSET $2`;
  db.query(sql, [Number(limit), Number(offset)], (err, result) => {
    if (err) throw res.json(err);
    return res.status(200).json(result.rows);
  });
});

// Search accounts by name or type
router.get("/api/v1/accounts/search", (req, res) => {
  const { name, type } = req.query;
  const sql = "SELECT * FROM acc.account WHERE name ILIKE $1 OR type ILIKE $2";
  db.query(sql, [`%${name}%`, `%${type}%`], (err, result) => {
    if (err) throw res.json(err);
    return res.status(200).json(result.rows);
  });
});

// Add a new account
router.post("/api/v1/accounts", (req, res) => {
  const { name, type, balance } = req.body;

  // Check if all parameters are present
  if (!name || !type || balance === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = "INSERT INTO acc.account(name, type, balance) VALUES ($1, $2, $3) RETURNING *";
  db.query(sql, [name, type, balance], (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    return res.status(201).json(result.rows);
  });
});


// Update an account by ID
router.put("/api/v1/accounts/:id", (req, res) => {
  const accid = Number(req.params.id);
  const { name, type, balance } = req.body;
  const sql = "UPDATE acc.account SET name=$1, type=$2, balance=$3 WHERE id=$4";
  db.query(sql, [name, type, balance, accid], (err, result) => {
    if (err) throw res.json(err);
    return res.status(200).json(`Account was updated successfully for id: ${accid}`);
  });
});

// Delete an account by ID
router.delete("/api/v1/accounts/:id", (req, res) => {
  const id = Number(req.params.id);
  const sql = "DELETE FROM acc.account WHERE id=$1";
  db.query(sql, [id], (err, result) => {
    if (err) throw res.json(err);
    return res.status(200).json(`Account was deleted successfully for id: ${id}`);
  });
});

// Delete all accounts
router.delete("/api/v1/accounts", (req, res) => {
  const sql = "DELETE FROM acc.account";
  db.query(sql, (err, result) => {
    if (err) throw res.json(err);
    return res.status(200).json("All accounts were deleted successfully");
  });
});

module.exports = router;
