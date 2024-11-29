import Cisterna from "../models/Cisterna.js";

// Obtener todas las cisternas
export const getCisternas = async (req, res) => {
    try {
        const cisternas = await Cisterna.find();
        res.status(200).json(cisternas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva cisterna
export const createCisterna = async (req, res) => {
    try {
        const { capacidad, usuario } = req.body;

        const newCisterna = new Cisterna({ capacidad, usuario });
        const savedCisterna = await newCisterna.save();

        res.status(201).json(savedCisterna);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una cisterna por ID
export const getCisternaById = async (req, res) => {
    try {
        const { cisternaId } = req.params;
        const cisterna = await Cisterna.findById(cisternaId);

        if (!cisterna) return res.status(404).json({ message: "Cisterna no encontrada" });
        
        res.status(200).json(cisterna);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una cisterna por ID
export const updateCisternaById = async (req, res) => {
    try {
        const { cisternaId } = req.params;
        const { capacidad, usuario } = req.body;

        const updatedCisterna = await Cisterna.findByIdAndUpdate(
            cisternaId,
            { capacidad, usuario },
            { new: true }
        );

        if (!updatedCisterna) return res.status(404).json({ message: "Cisterna no encontrada" });
        
        res.status(200).json(updatedCisterna);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una cisterna por ID
export const deleteCisternaById = async (req, res) => {
    try {
        const { cisternaId } = req.params;
        const deletedCisterna = await Cisterna.findByIdAndDelete(cisternaId);

        if (!deletedCisterna) return res.status(404).json({ message: "Cisterna no encontrada" });
        
        res.status(204).json({ message: "Cisterna eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
