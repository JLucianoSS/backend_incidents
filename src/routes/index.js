
const { Router } = require('express');
const router = Router();

/* Importación de controllers */
const { 
    getMessageHome, 
    getTypesIncidents, 
    createTypesIncidents, 
    createUser, 
    findUser, 
    createIncident , 
    updateIncidentById,
    getIncidents, 
    deleteIncidentById,
    filterIncidents,
    getIncidentByQuery
} = require('../controllers');



/* Configuración de rutas*/
router.get("/", getMessageHome );

/* CRUD  de incidencias */
router.post("/incident/create",  createIncident);
router.patch("/incident/:idIncident", updateIncidentById);
router.get("/incidents", getIncidents);
router.delete("/incident/:idIncident",  deleteIncidentById);
router.get("/incidents/filter/:state",  filterIncidents);
router.get("/incidents/search/",  getIncidentByQuery);



/* Gestión de TIPOS de incidencias */
router.get("/incidents/types",  getTypesIncidents);
router.post("/incidents/types/create",  createTypesIncidents);


/* Gestión de usuario */
router.post("/user/create",  createUser);
router.post("/user/find",  findUser);


module.exports = router;

