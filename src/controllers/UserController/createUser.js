




const { Usuario } = require("../../db/connection");

const createUser = async (req, res) => {
  try {

   
    return res.json({message:' Usuario creado'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = createUser;
