import Semillas from "../models/Semillas.js";

// Obtener todas las semillas
export const getSemillas = async (req, res) => {
    try {
        const semillas = await Semillas.find();
        res.status(200).json(semillas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva semilla
export const createSemilla = async (req, res) => {
    try {
        const { semilla } = req.body;

        const newSemilla = new Semillas({ semilla });
        const savedSemilla = await newSemilla.save();

        res.status(201).json(savedSemilla);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una semilla por ID
export const getSemillaById = async (req, res) => {
    try {
        const { semillaId } = req.params;
        const semilla = await Semillas.findById(semillaId);

        if (!semilla) return res.status(404).json({ message: "Semilla no encontrada" });
        
        res.status(200).json(semilla);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una semilla por ID
export const updateSemillaById = async (req, res) => {
    try {
        const { semillaId } = req.params;
        const { semilla } = req.body;

        const updatedSemilla = await Semillas.findByIdAndUpdate(
            semillaId,
            { semilla },
            { new: true }
        );

        if (!updatedSemilla) return res.status(404).json({ message: "Semilla no encontrada" });
        
        res.status(200).json(updatedSemilla);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una semilla por ID
export const deleteSemillaById = async (req, res) => {
    try {
        const { semillaId } = req.params;
        const deletedSemilla = await Semillas.findByIdAndDelete(semillaId);

        if (!deletedSemilla) return res.status(404).json({ message: "Semilla no encontrada" });
        
        res.status(204).json({ message: "Semilla eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
