//importar modelo de datos User
import User from "../models/User.js"
import jwt from "jsonwebtoken";

//Crear constante SECRET
//const elsecreto = process.env.SECRET;


//exportar las funciones signUp y singIn
export const signUp = async (req, res) => {

//extrare datos del cuerpo de la peticion
const { username, /*email,*/ password } = req.body;

//crear nuevo usuario
const newUser = new User({
    username,
    //email,
    password: await User.encryptPassword(password)
});



//guardaar el usuario en la base de datos
const saveUser = await newUser.save();
console.log(newUser);
//console.log(elsecreto);


//responder al cliente
res.json(newUser);
}

export const signIn = async (req, res) => {
    //buscar usuario por nombre
    const userFound = await User.findOne({username : req.body.username});

    //si no se encuantra el usuario, enviar mensaje de error
    if(!userFound) return res.status(400).json({ message: "Usuario no reconocido"});

    //verificar contraseña
    const matchpassword = await User.comparePassword(req.body.password,userFound.password);

    if(!matchpassword) return res.status(401).json({user: null,message: "contraseña invalida"});

    
    //generar token
/*
    const token = jwt.sign({ _id: userFound.id },process.env.SECRET,{
        expiresIn: 86400 //24 horas
    });
*/
    
    //mostrar usuario encontrado
    //console.log(userFound);
    //Enviar estatus y el token en la respuesta

    res.status(200).json({user: userFound,message: "usuario encontrado"});
    
}






