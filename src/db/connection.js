
// Importaciones requeridas
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require('sequelize');

// Importaciones de modelos
const IncidenciaModel = require('../models/Incidencia');
const UsuarioModel = require('../models/Usuario');
const TipoIncidenciaModel = require('../models/TipoIncidencia');


/* Configuración para la conexion a la bd */
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?sslmode=require`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);

//Ejecutando la creacion de los modelos
IncidenciaModel(sequelize);
UsuarioModel(sequelize);
TipoIncidenciaModel(sequelize);

// Relaciones
const { Incidencia, Usuario, TipoIncidencia  } = sequelize.models;

Usuario.hasMany(Incidencia, { foreignKey: 'ID_usuario', as:"usuario" });
Incidencia.belongsTo(Usuario, { foreignKey: 'ID_usuario', as:"usuario" });

TipoIncidencia.hasMany(Incidencia, { foreignKey: 'ID_tipo',as: 'tipo' })
Incidencia.belongsTo( TipoIncidencia, { foreignKey: 'ID_tipo', as: 'tipo' });




module.exports = {
    ...sequelize.models,
    conn: sequelize, 
};
  