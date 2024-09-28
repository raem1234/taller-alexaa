const adoptcontroller = require('../controllers/controllersadoptante')
const express= require('express')
const router = express.Router()

router.post('/adopt',adoptcontroller.crearAdoptante)
router.get('/adopt',adoptcontroller.verAdoptantes)

module.exports = router