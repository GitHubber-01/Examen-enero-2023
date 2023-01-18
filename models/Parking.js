import {Schema, model, models} from "mongoose";

const parkingSchema = new Schema({
	poiID: {
        type: Number,
        required: [true, "Campo obligatorio."],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, "Campo obligatorio."]
    },
    direccion: {
        type: String,
        required: [true, "Campo obligatorio."]
    },
    latitud: {
        type: Number,
        required: [true, "Campo obligatorio."]
    },
    longitud: {
        type: Number,
        required: [true, "Campo obligatorio."]
    },
    capacidad: {
        type: Number,
        required: [true, "Campo obligatorio."]
    },
    libres: {
        type: Number,
        required: [true, "Campo obligatorio."]
    },
    correo: {
        type: String,
        required: [true, "Campo obligatorio."]
    }
}, {collection: "Parking"});

export default models.Parking || model("Parking", parkingSchema);