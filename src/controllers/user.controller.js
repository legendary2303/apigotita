import UsuariosGotita from "../models/User.js";


// Obtener información de todos los usuarios (ejemplo de endpoint de administración)
export const getUsers = async (req, res) => {
    try {
        const users = await UsuariosGotita.find({}, { password: 0 }); // Excluir la contraseña
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await UsuariosGotita.findById(userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un usuario por ID
export const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        await UsuariosGotita.findByIdAndDelete(userId);
        res.status(204).json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
