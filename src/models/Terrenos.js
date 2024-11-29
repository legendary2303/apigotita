import { Schema,model } from "mongoose";

const terrenosSchema =  new Schema({
    ancho: Number,
    largo: Number,
    profundidad: Number,
    usuario:{
        ref: "Usuarios",
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Terrenos',terrenosSchema);