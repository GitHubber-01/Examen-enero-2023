import conectarDB from "../../lib/dbConnect";
import Parking from "../../models/Parking";

export default async function handler(req, res) {
    await conectarDB();
    const {method} = req;

    switch (method) {
        case "GET":
            try {
                return res.status(200).json(await Parking.find());
            } catch (error) {
                console.log(error);
                return res.status(400).json({success: false, error});
            }
        case "POST":
            try {
                var parking = new Parking(req.body);
                await parking.save();
                return res.status(200).json({success: true, parking});
            } catch (error) {
                console.log(error);
                return res.status(400).json({success: false, error});
            }
        default:
            return res.status(500).json({success: false, error: "Error del servidor."})
    }
}