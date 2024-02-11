const { Op } = require("sequelize");
const { Incidencia, TipoIncidencia, Usuario } = require("../../db/connection");

const getIncidentbyQuery = async (req, res) => {
  try {
    const { asunto } = req.query;

    if (!asunto) {
      return res.status(400).json({ message: "El parámetro 'asunto' es requerido." });
    }

    const incidencias = await Incidencia.findAll({
      where: {
        asunto: {
          [Op.iLike]: `%${asunto}%` // Búsqueda reactiva por asunto
        }
      },
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

    return res.json({ message: `Incidentes encontrados`, incidencias });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getIncidentbyQuery;