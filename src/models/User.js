import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    /*email:{
        type: String,
        required: true
    },*/
    password:{
        type: String,
        required: true
    }
    },{
        timestamps: true,
        versionKey: false
    });


    //metodo para encriptar la contraseña usuario envia por contraseña
    userSchema.statics.encryptPassword = async (password) => {
        //generar salt para encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        //retornar la contraseña encriptada
        return await bcrypt.hash(password,salt); 
    }

    //metodo para comparar la contraseña del usuario con la contraseña enviada
    userSchema.statics.comparePassword = async (password, receivePassword) => {
        //comparar la contraseña enviada con la contraseña encriptada
        return await bcrypt.compare(password,receivePassword);

    }

    

    export default model('UsuariosGotita',userSchema);
