
const { Router } = require('express');
const router = Router();


/* Importación de controllers */
const { getMessageHome, getTypesIncidents, createTypesIncidents } = require('../controllers');



/* Configuración de routers*/
router.get("/", getMessageHome );
router.get("/tipos-incidencias",  getTypesIncidents);
router.post("/crear-tipos-incidencias",  createTypesIncidents);


module.exports = router;

