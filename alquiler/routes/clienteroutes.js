const express = require('express');
const { registrarCliente, listarclientesDisponibles } = require('../controllers/clientecontroller');
const router = express.Router();

router.post('/clientes', registrarCliente);
router.get('/ver', listarclientesDisponibles);

module.exports = router;
