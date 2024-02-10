
const { Usuario } = require("../../db/connection");

const getUserById = async (req, res) => {
  try {

    const { idUser } = req.params;

   
    return res.json({message:' Usuario encontrado',idUser});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getUserById;
