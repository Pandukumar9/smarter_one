const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const { Restaurant, Item, Order } = require('./models');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// WebSocket Event: Listen for orders
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('new-order', (orderDetails) => {
    console.log('Order placed:', orderDetails);
    socket.broadcast.emit('order-notification', orderDetails);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// API Routes

// Generate QR Code
app.get('/api/qrcode/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const restaurant = await Restaurant.findByPk(restaurantId);

  if (!restaurant) {
    return res.status(404).send('Restaurant not found');
  }

  const menuUrl = `http://localhost:${PORT}/menu/${restaurantId}`;
  try {
    const qrCodeDataURL = await QRCode.toDataURL(menuUrl);
    res.json({ qrCodeDataURL });
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

// Endpoint to fetch menu items for a restaurant
app.get('/api/menu/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const items = await Item.findAll({ where: { restaurantId } });
  res.json(items);
});

// Create a new order
app.post('/api/orders', async (req, res) => {
  const { customerName, customerPhone, items } = req.body;

  // Create order
  const order = await Order.create({
    customerName,
    customerPhone,
    status: 'pending',
  });

  // Add items to the order
  await order.setItems(items);

  // Emit order notification to clients
  io.emit('new-order', { orderId: order.id, customerName, items });

  res.status(201).json(order);
});

// Sync database and start server
server.listen(PORT, async () => {
  await require('./config/db').sync();  // Sync DB models
  console.log(`Server running on port ${PORT}`);
});
