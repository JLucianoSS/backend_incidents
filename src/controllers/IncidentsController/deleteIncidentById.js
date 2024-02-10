
const { Incidencia } = require("../../db/connection");

const deleteIncidentById =  async( req, res ) => {
    try {

        const { idIncident } = req.params;
        return res.json( {message:'Incidente eliminado', idIncident} );
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = deleteIncidentById;