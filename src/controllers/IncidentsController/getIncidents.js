const { Incidencia } = require("../../db/connection");

const getIncidents = async (req, res) => {
  try {

    return res.json({message:'Lista de incidentes'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getIncidents;
