
const { Router } = require('express');
const router = Router();

/* Importación de controllers */
const { 
    getMessageHome, 
    getTypesIncidents, 
    createTypesIncidents, 
    createUser, 
    getUserById, 
    createIncident , 
    updateIncidentById,
    getIncidents, 
    deleteIncidentById
} = require('../controllers');



/* Configuración de rutas*/
router.get("/", getMessageHome );

/* CRUD  de incidencias */
router.post("/incident/create",  createIncident);
router.patch("/incident/:idIncident", updateIncidentById);
router.get("/incidents", getIncidents);
router.delete("/incident/:idIncident",  deleteIncidentById);

/* Gestión de TIPOS de incidencias */
router.get("/incidents/types",  getTypesIncidents);
router.post("/incidents/types/create",  createTypesIncidents);


/* Gestión de usuario */
router.post("/user/create",  createUser);
router.get("/user/:idUser",  getUserById);


module.exports = router;

