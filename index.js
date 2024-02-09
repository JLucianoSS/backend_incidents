

const server = require("./src/app");
const port = 3001;



// Inicia el servidor
server.listen(port, () => {
  console.log(`Server listen in http://localhost:${port}`);
});
