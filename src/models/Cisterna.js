import { Schema,model } from "mongoose";

const cisternaSchema =  new Schema({
    
    capacidad: {
        type: String,
        required:true
    },
    usuario:{
        ref: "Usuarios",
        type: Schema.Types.ObjectId,
        required: true
    }
    
}, {
    timestamps: true,
    versionKey: false
});

export default model('Cisterna',cisternaSchema);