



const { Incidencia } = require("../../db/connection");

const createIncident = async (req, res) => {
  try {

    const incidente = req.body;
    return res.json({message:'Incidente registrado',incidente});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = createIncident;
