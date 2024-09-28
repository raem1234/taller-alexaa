const Cliente = require('../models/clientemodels');

const registrarCliente = async (req, res) => {
    const { nombre, correo } = req.body;
    try {
        const nuevoCliente = new Cliente({ nombre, correo });
        await nuevoCliente.save();
        res.status(201).json({ mensaje: 'Cliente registrado con éxito', cliente: nuevoCliente });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar cliente', error });
    }
};
const listarclientesDisponibles = async (req, res) => {
    try {
        const clientes = await Cliente.find(); // Encuentra todos los clientes
        res.status(200).json(clientes); // Devuelve la lista de clientes
    } catch (error) {
        res.status(500).json({ message: 'Error al listar los clientes', error });
    }
};


module.exports = { registrarCliente, listarclientesDisponibles };
