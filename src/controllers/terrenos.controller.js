import Terrenos from "../models/Terrenos.js";

// Obtener todos los terrenos
export const getTerrenos = async (req, res) => {
    try {
        const terrenos = await Terrenos.find();
        res.json(terrenos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo terreno
export const createTerreno = async (req, res) => {
    try {
        const { ancho, largo, profundidad, usuario } = req.body;
        const newTerreno = new Terrenos({ ancho, largo, profundidad, usuario });
        const terrenoSaved = await newTerreno.save();
        res.status(201).json(terrenoSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un terreno por ID
export const getTerrenoById = async (req, res) => {
    try {
        const { terrenoId } = req.params;
        const terreno = await Terrenos.findById(terrenoId);
        if (!terreno) return res.status(404).json({ message: "Terreno no encontrado" });
        res.json(terreno);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un terreno por ID
export const updateTerrenoById = async (req, res) => {
    try {
        const { terrenoId } = req.params;
        const { ancho, largo, profundidad } = req.body;
        const updatedTerreno = await Terrenos.findByIdAndUpdate(
            terrenoId,
            { ancho, largo, profundidad },
            { new: true }
        );
        res.status(200).json(updatedTerreno);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un terreno por ID
export const deleteTerrenoById = async (req, res) => {
    try {
        const { terrenoId } = req.params;
        await Terrenos.findByIdAndDelete(terrenoId);
        res.status(204).json({ message: "Terreno eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener terrenos por usuario
export const getTerrenosByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const terrenos = await Terrenos.find({ usuario: userId });
        res.json(terrenos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





export const calcularTerreno = async (req, res) => {
    try {
        // Verifica si se recibió el parámetro id_terreno
        const { terrenoId } = req.params;
        if (!terrenoId) return res.status(400).json({ message: "Por favor, proporcione el parámetro 'terrenoId'." });

        // Busca el terreno por ID
        const terreno = await Terrenos.findById(terrenoId);
        if (!terreno) return res.status(404).json({ message: "No se encontraron las medidas del terreno." });

        // Extrae las medidas del terreno
        const { ancho, largo, profundidad } = terreno;

        // Calcula el volumen del terreno en litros (convertido de metros cúbicos a litros)
        const volumenTerrenoLitros = Math.round(ancho * largo * profundidad * 1000);

        // Calcula el tiempo requerido para vaciar el terreno en horas
        const tiempoEnHoras = Math.round((volumenTerrenoLitros / 1265.82 / 60) * 100) / 100;

        // Devuelve los resultados
        res.status(200).json({
            terrenoId,
            ancho,
            largo,
            profundidad,
            volumenTerrenoLitros,
            tiempoEnHoras,
            message: `La cantidad de litros que ocupará el terreno es: ${volumenTerrenoLitros} litros. El terreno se vaciará en aproximadamente ${tiempoEnHoras} horas.`
        });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener detalles del terreno.", error: error.message });
    }
};