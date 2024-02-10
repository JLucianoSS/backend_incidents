

const { Incidencia } = require("../../db/connection");

const updateIncidentById = async (req, res) => {
  try {

    const { idIncident } = req.params;

    const nuevoEstado = req.body.estado;

    // Actualizamos el estado de la incidencia
    const resultado = await Incidencia.update(
      { estado: nuevoEstado },
      { where: { ID_incidencia: idIncident } }
    );

    if (resultado[0] === 1) {
      // La actualización fue exitosa
      return res.json({message:'Insidencia actualizada',idIncident});
    } 
      return res.status(404).json({ error: 'Incidencia no encontrada' });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = updateIncidentById;
