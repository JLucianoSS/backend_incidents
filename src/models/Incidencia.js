const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Incidencia', {
      ID_incidencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      asunto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detalle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_reporte: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
     
    },
    {timestamps:false,}
    );
  };
  