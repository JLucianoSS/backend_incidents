const { TipoIncidencia } = require("../../db/connection");

const getTypesIncidents = async (req, res) => {
  try {
    const typesList = req.body;

    // Obtiene los nombres de los tipos de incidentes existentes
    const existingTypes = await TipoIncidencia.findAll({
      attributes: ['nombre_tipo'],
      raw: true,
    });

    // Filtra los tipos de incidentes nuevos 
    const newTypesList = typesList.filter(item => {
      return !existingTypes.some(existingType => existingType.nombre_tipo === item.nombre_tipo);
    });

    // Verifica si hay tipos de incidentes nuevos para insertar
    if (newTypesList.length > 0) {
      const resultados = await TipoIncidencia.bulkCreate(newTypesList);
      return res.json({ message: 'Tipos de Incidentes creados', resultados });
    } else {
      return res.json({ message: 'No hay tipos de incidentes nuevos para crear' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getTypesIncidents;