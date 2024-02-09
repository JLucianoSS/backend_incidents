
const { Router } = require('express');
const router = Router();

/* Importación de controllers */
const { getMessageHome } = require('../controllers');



/* Configuración de routers*/
router.get("/", getMessageHome );


module.exports = router;

