const express = require('express');
const mongoose = require('./config/db');
const clienteRoutes = require('./routes/clienteroutes');
const autoRoutes = require('./routes/autoroutes');
const alquilerRoutes = require('./routes/alquilerroutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', clienteRoutes);
app.use('/api', autoRoutes);
app.use('/api', alquilerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
