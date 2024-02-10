

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('TipoIncidencia', {
      ID_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: 200
      },
      nombre_tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {timestamps:false,}
    );
  };
  