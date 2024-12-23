const express = require('express');
const QRCode = require('qrcode');
const { Restaurant } = require('../models');
const router = express.Router();

router.get('/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const restaurant = await Restaurant.findByPk(restaurantId);

  if (!restaurant) {
    return res.status(404).send('Restaurant not found');
  }

  const url = `https://yourapp.com/menu/${restaurantId}`;

  try {
    const qrCodeDataURL = await QRCode.toDataURL(url);
    res.json({ qrCodeDataURL });
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

module.exports = router;
