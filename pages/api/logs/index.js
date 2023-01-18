import conectarDB from "../../../lib/dbConnect";
import Log from "../../../models/Log";

export default async function handler(req, res) {
    await conectarDB();
    const {method} = req;

    switch (method) {
        case "GET":
            try {
                return res.status(200).json(await Log.find());
            } catch (error) {
                return res.status(400).json({success: false, error});
            }
        case "POST":
            try {
                var log = new Log(req.body);
                await log.save();
                return res.status(200).json({success: true, log});
            } catch (error) {
                return res.status(400).json({success: false, error});
            }
        default:
            return res.status(500).json({success: false, error: "Error del servidor."})
    }
}