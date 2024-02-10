// const axios = require('axios');
const { TipoIncidencia } = require("../../db/connection");

const getTypesIncidents = async (req, res) => {
  try {
    /*Comprueba si la bd ya tiene los types antes de ingresarlos */
    const count = await TipoIncidencia.count();
    if (count !== 0) {
      const typesBd = await TipoIncidencia.findAll();
      return res.json(typesBd);
    }
    /* Si la bd ya tiene types solo los obtiene */
    return res.json({message:'No hay types'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getTypesIncidents;
