

require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require('sequelize');


/* Configuración para la conexion a la bd */
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);





module.exports = {
    conn: sequelize, 
};
  