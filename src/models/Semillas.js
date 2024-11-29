import { Schema,model } from "mongoose";

const semillasSchema =  new Schema({
    
    semilla: {
        type: String,
        required:true
    }
    
}, {
    timestamps: true,
    versionKey: false
});

export default model('semillas',semillasSchema);