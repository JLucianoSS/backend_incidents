const { Incidencia } = require("../../db/connection");

const deleteIncidentById = async (req, res) => {
  try {
    const { idIncident } = req.params;
    // Utiliza el método destroy para borrar la incidencia por su ID
    const filasBorradas = await Incidencia.destroy({
      where: {
        ID_incidencia: idIncident,
      },
    });

    if (filasBorradas === 1) {
      // Se ha borrado correctamente
      return res.json({ message: "Incidente eliminado", idIncident,filasBorradas });
    }

    return res.status(404).json({ error: "Incidencia no encontrada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteIncidentById;
