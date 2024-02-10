
const { Usuario } = require("../../db/connection");

const getUserById = async (req, res) => {
  try {

    const { idUser } = req.params;

    //TODO: logica para encontrar el usuario en la bd

   
    return res.json({message:' Usuario encontrado',idUser});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getUserById;
