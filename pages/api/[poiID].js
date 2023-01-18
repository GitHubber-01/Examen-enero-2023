import conectarDB from "../../lib/dbConnect";
import Parking from "../../models/Parking";

export default async function handler(req, res) {
    await conectarDB();

    const {method, query: {poiID}} = req;



    switch (method) {
        case "PUT":
            try {
                const parking = await Parking.findOneAndUpdate(
                    {poiID}, 
                    req.body,
                    {new: true, runValidators: true}
                );
                if (!parking)
                    return res.status(404).json({success: false, error});
                return res.json({success: true, data: parking});
            } catch (error) {
                return res.status(404).json({success: false, error});
            }
        case "DELETE":
            try {
                const parking = await Parking.findOneAndDelete({poiID});
                if (!parking)
                    return res.status(404).json({success: false, error});
                return res.json({success: true, data: parking});
            } catch (error) {
                return res.status(404).json({success: false, error});
            }
        case "GET":
            try {
                const parking = await Parking.findOne({poiID}).lean();
                if (!parking)
                    return res.status(404).json({success: false, error});
                return res.json({success: true, data: parking});
            } catch (error) {
                return res.status(404).json({success: false, error});
            }
        default:
            return res.status(500).json({success: false, error: "Error del servidor."})
    }
}