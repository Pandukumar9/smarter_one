// constants or module
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3005;
const bodyParser = require('body-parser');

// create node js server
// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

const controller = require("./controller/controller");
app.use(controller);

app.listen(PORT, (err) => {
  if(err) throw err;
  console.log(`Server is running on Port: ${PORT}`);
})

// create node js server

//create postgresql connection and pool

//create controller-implement crud functionalities



// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const socketIo = require('socket.io');
// const QRCode = require('qrcode');
// const sequelize = require('./config/db');
// const controller = require('./controller/controller');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server); // Set up socket.io

// // Middlewares
// // app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:4200', // Replace with the actual frontend URL if different
//   methods: 'GET,POST,PUT,DELETE',
//   allowedHeaders: 'Content-Type, Authorization'
// }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes and controller
// app.use(controller);

// // Generate QR Code for a restaurant
// app.get('/api/v1/qrcode/:restaurantId', async (req, res) => {
//   const { restaurantId } = req.params;
//   const url = `http://localhost:3005/order/${restaurantId}`; // Link to order page for the restaurant

//   try {
//     const qrCode = await QRCode.toDataURL(url); // Generate QR code
//     res.status(200).json({ qrCode });
//   } catch (error) {
//     res.status(500).json({ error: 'Error generating QR code' });
//   }
// });

// // Listen to socket connection
// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   // Emit real-time notifications (e.g., new orders)
//   socket.on('newOrder', (orderData) => {
//     io.emit('orderReceived', orderData);
//   });
// });

// // Sync Database and Start Server
// sequelize.sync().then(() => {
//   console.log('Database synced!');
//   server.listen(3005, () => {
//     console.log('Server is running on Port: 3005');
//   });
// }).catch((err) => {
//   console.log('Error syncing database:', err);
// });
