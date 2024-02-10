




const { Usuario } = require("../../db/connection");

const createUser = async (req, res) => {
  try {

    const { nombre, correo , contraseña, rol } = req.body;

    const [newUser,isCreated] = await Usuario.findOrCreate({
      where:{ nombre },
      defaults:{correo,contraseña,rol}
    });

    if(isCreated){
      return res.json({message:' Usuario creado',newUser})
    }
    return res.status(409).json({message:"Ya existe este usuario"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = createUser;
