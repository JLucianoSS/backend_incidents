const { Incidencia, TipoIncidencia, Usuario } = require("../../db/connection");

const getIncidents = async (req, res) => {
  try {
    const incidencias = await Incidencia.findAll({
      include:[
        {
          model: TipoIncidencia,
          attributes: ["nombre_tipo"],
          as:"tipo"
        },
        {
          model: Usuario,
          attributes: ["nombre"],
          as:"usuario"
        }
      ]
    });

    // Verifica si hay incidencias
    if (incidencias.length === 0) {
      // Envía un mensaje personalizado si no hay incidencias
      return res
        .status(404)
        .json({ mensaje: "No hay incidencias disponibles" });
    }
    // Envía las incidencias como respuesta
    return res
      .status(200)
      .json({ message: "Lista de incidentes", incidencias });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getIncidents;
