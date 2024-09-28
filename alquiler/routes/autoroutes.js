const express = require('express');
const { registrarAuto, listarAutosDisponibles } = require('../controllers/autocontroller');
const router = express.Router();

router.post('/autos', registrarAuto);
router.get('/autos/disponibles', listarAutosDisponibles);

module.exports = router;
