

const { Incidencia } = require("../../db/connection");

const updateIncidentById = async (req, res) => {
  try {

    const { idIncident } = req.params;
    return res.json({message:'Insidencia actualizada',idIncident});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = updateIncidentById;
