
const getMessageHome = require("./OtherController/getMessageHome");
const getTypesIncidents = require("./TypesController/getTypesIncidents");
const createTypesIncidents = require("./TypesController/createTypesIncidents");
const createUser = require("./UserController/createUser");
const getUserById = require("./UserController/getUserById");
const createIncident = require("./IncidentsController/createIncident");
const updateIncidentById = require("./IncidentsController/updateIncidentById");
const getIncidents = require("./IncidentsController/getIncidents");
const deleteIncidentById = require("./IncidentsController/deleteIncidentById");



module.exports = {
    getMessageHome,
    getTypesIncidents,
    createTypesIncidents,
    createUser,
    getUserById,
    createIncident,
    updateIncidentById,
    getIncidents,
    deleteIncidentById
    

}

