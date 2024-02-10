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
        type: DataTypes.ENUM('pendiente', 'en proceso', 'resuelto'),
        allowNull: false,
        defaultValue: 'pendiente', // Puedes establecer un valor predeterminado si lo deseas
      },
      fecha_reporte: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
     
    },
    {timestamps:false,}
    );
  };
  