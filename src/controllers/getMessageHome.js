

// Un simple mensaje para saber que todo va bien
const getMessageHome =  async( req, res ) => {
    try {
        return res.json( {message:'Api Rest - Incidents'} );
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports = getMessageHome;