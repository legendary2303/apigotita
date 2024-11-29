import app from "../app.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
app.listen(3000);


//conexion con mongoose

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a la base de datos Atlas"))
.catch((error) => console.error(error));



console.log('Servidor escuchando en el puerto',3000);

