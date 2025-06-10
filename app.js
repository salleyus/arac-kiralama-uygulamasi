const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/reports', reportRoutes);

// Database Connection
mongoose.connect('mongodb://localhost:27017/arac_kiralama', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Veritabanına bağlandı');
}).catch((err) => {
  console.error('Veritabanı bağlantı hatası:', err);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});