const adopcontroller = require('../controllers/controllersadopcion')
const express= require('express')
const router = express.Router()

router.post('/adopcion',adopcontroller.crear)
router.get('/adopcion',adopcontroller.ver)

module.exports = router