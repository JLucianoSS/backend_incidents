



const { Incidencia } = require("../../db/connection");

const createIncident = async (req, res) => {
  try {

    const { asunto, detalle, estado, ID_usuario, ID_tipo } = req.body;

    const [newIncident,isCreated] = await Incidencia.findOrCreate({
      where:{ asunto },
      defaults:{detalle,estado,ID_usuario,ID_tipo}
    });

    if(isCreated){
      return res.json({message:'Incidente registrado',newIncident});
    }
    return res.status(409).json({message:"Ese incidente ya existe"})
    
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = createIncident;
