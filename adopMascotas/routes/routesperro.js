const percontroller = require('../controllers/controllersperro')
const express= require('express')
const router = express.Router()

router.post('/perro',percontroller.crearPerro)
router.get('/perro',percontroller.verPerros)

module.exports = router