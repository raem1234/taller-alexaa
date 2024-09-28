const express = require('express');
const { realizarAlquiler, historialAlquileres } = require('../controllers/alquilercontroller');
const router = express.Router();

router.post('/alquilar', realizarAlquiler);
router.get('/historial', historialAlquileres);

module.exports = router;
