
const server = require("./src/app");
const { conn } = require('./src/db/connection');


const port = 3001;



/* Establece la conexion con la BD */
conn.sync({ force: true }).then(() => {
  console.log('Database Connected');
  
  // Inicia el servidor
  server.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`);
  });
  
}).catch(error => console.log(error.message));