import conectarDB from "../../../lib/dbConnect";
import Parking from "../../../models/Parking";

export default async function handler(req, res) {
    await conectarDB();

    const {method} = req;

    switch (method) {
        case "GET":
            try {
                const parkings = await Parking.find().lean();
                var libres = [];
                for (let i = 0; i < parkings.length; i++) {
                    var p = parkings[i];
                    if (p.capacidad !== 0 && p.libres / p.capacidad >= 0.25)
                        libres.push(p);
                }
                return res.json({success: true, data: libres});
            } catch (error) {
                return res.status(404).json({success: false, error});
            }
        default:
            return res.status(500).json({success: false, error: "Error del servidor."})
    }
}