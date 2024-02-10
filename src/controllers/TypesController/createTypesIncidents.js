

const { TipoIncidencia } = require("../../db/connection");





const getTypesIncidents = async (req, res) => {
  try {

    const typesList  = req.body;
    const resultados = await TipoIncidencia.bulkCreate(typesList);
    return res.json({message:'Typos de Incidentes creados', resultados});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getTypesIncidents;
