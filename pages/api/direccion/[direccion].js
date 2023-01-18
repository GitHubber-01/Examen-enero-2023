import conectarDB from "../../../lib/dbConnect";
import Parking from "../../../models/Parking";

export default async function handler(req, res) {
    await conectarDB();
    const {method, query: {direccion}} = req;

    switch (method) {
        case "GET":
            try {
                const parkings = await Parking.find({direccion: new RegExp(direccion, "i")});
                return parkings.length === 0 ? 
                    res.status(400).json({success: false, error: "No hay aparcamientos con esta dirección."}) : 
                    res.status(200).json({success: true, parkings});
            } catch (error) {
                console.log(error)
                return res.status(400).json({success: false, error});
            }
        default:
            return res.status(500).json({success: false, error: "Error del servidor."})
    }
}