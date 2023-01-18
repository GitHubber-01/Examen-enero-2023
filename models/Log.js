import {Schema, model, models} from "mongoose";

const logSchema = new Schema({
	timestamp: {
        type: Date,
        default: Date.now()
    },
    usuario: {
        type: String,
    },
    caducidad: {
        type: Date
    },
    token: {
        type: String
    }
}, {collection: "Log"});

export default models.Log || model("Log", logSchema);