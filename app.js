import express from "express";
import semillasRoutes from "./src/routes/semillas.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import cisternaRoutes from "./src/routes/cisterna.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import terrenosRoutes from "./src/routes/terrenos.routes.js";
//import { createRoles } from "./src/libs/initialSetup.js";
import cors from "cors"

const app = express();
//createRoles();

//Establecer ruta inicial
app.get('/', (req,res) => {
    res.send("Bienvenido a mi API");
});


// Configurar CORS
/*
const corsOptions = {
    origin: "http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    };
    */

app.use(express.json());
//app.use(cors(corsOptions));
app.use('/api/semillas', semillasRoutes);
app.use('/api/cisterna', cisternaRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/terrenos', terrenosRoutes);


export default app;