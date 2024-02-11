const { Usuario } = require("../../db/connection");

const findUser = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    console.log(req.body);
    
    const user = await Usuario.findOne({ where: { correo, contraseña } });

    if (user) {
      return res.json({ message: 'Usuario encontrado', user });
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado', user: null });
    }
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = findUser;