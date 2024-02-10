

// const axios = require('axios');
const { TipoIncidencia  } = require("../../db/connection");


const getTypesIncidents = async (req,res) => {
    try {
        
        res.json({message: 'Todos los types'})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = getTypesIncidents;