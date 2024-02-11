const { Incidencia, TipoIncidencia, Usuario } = require("../../db/connection");

const filterIncidents = async (req, res) => {
  try {
    const { state } = req.params;

    console.log(state);
    

    if (!['pendiente', 'en proceso', 'resuelto'].includes(state)) {
      return res.status(400).json({ message: 'Parámetro incorrecto. El estado debe ser uno de: pendiente, en proceso, resuelto' });
    }

    const incidencias = await Incidencia.findAll({
      where: {
        estado: state,
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

    if (incidencias.length > 0) {
      return res.json({ message: `Incidentes en estado ${state}`, incidencias });
    } else {
      return res.json({ message: `No hay incidencias en estado ${state}`,incidencias });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = filterIncidents;